import React, { useMemo } from 'react';
import ItemCard from '@/components/ItemCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import CardImage from '~/images/card-image.jpg';
import { Pagination } from 'swiper/modules';
import News from '@/components/News';
import Link from 'next/link';
import { Property, useGetPropertiesQuery } from '@/generated/generated';
import { gql, useQuery } from '@apollo/client';
import { NewsItem, QueryResponse } from '@/components/Home/news';
import { Divide, FileVideo, Loader2 } from 'lucide-react';

const NewsCard = (props: { news: NewsItem }) => {
  return (
    <Link href={`/news/${props.news.id}`}>
      <div className='itemCardShadow cursor-pointer rounded-2xl bg-white p-4 '>
        <div
          style={{
            backgroundImage: `url(${props.news.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className=' relative h-[150px] w-full overflow-hidden rounded-lg'
        ></div>
        <div className='mb-1 mt-4 truncate text-base font-medium'>
          {props.news.title}
        </div>
        <div className=' line-clamp-2 truncate text-sm font-normal text-[#808080]'>
          {props.news.content}
        </div>
      </div>
    </Link>
  );
};

const GET_MANY_NEWS = gql`
  query GetManyNews($input: GetManyInput) {
    getManyNews(input: $input) {
      count
      data {
        content
        createdAt
        id
        image
        slug
        status
        title
        updatedAt
      }
    }
  }
`;

const Home = () => {
  const [swiperLoaded, setSwiperLoaded] = React.useState(false);

  const { data, error, loading } = useGetPropertiesQuery({
    variables: {
      input: {
        pagination: {
          size: 10,
          page: 0,
        },
      },
    },
  });

  const propertiesData = useMemo<Property[]>(() => {
    return (
      data?.getProperties?.data?.map((p) => {
        const property: Property = {
          ...(p || {}),
          attachments: [],
          disclosures: [],
          images: [],
          subscriptions: [],
          notices: [],
          notifications: [],
          user_notifications: [],
          votes: [],
        };
        return {
          ...(property || {}),
          ...(p || {}),
          subscriptions: [],
          attachments:
            p?.attachments?.map((a) => ({
              ...a,
              property: property,
            })) || [],
          disclosures:
            p?.disclosures?.map((a) => ({
              ...a,
              property: property,
            })) || [],
          images: p?.images?.map((a) => ({ ...a, property: property })) || [],
          votes: p?.votes?.map((a) => ({ ...a, property: property })) || [],
        };
      }) || []
    );
  }, [data]);

  React.useEffect(() => {
    // Simulate a delay for loading Swiper CSS
    const delay = setTimeout(() => {
      setSwiperLoaded(true);
    }, 100); // Adjust the delay as needed

    // Clear the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);

  console.log('data', data);

  const {
    loading: NewsLoading,
    error: NewsError,
    data: NewsData,
  } = useQuery<QueryResponse>(GET_MANY_NEWS, {
    variables: {
      input: {
        pagination: {
          page: 1,
          size: 10,
        },
      },
    },
  });

  const News = useMemo(() => {
    return NewsData?.getManyNews.data;
  }, [data]);

  console.log('News', News);

  return (
    <>
      {swiperLoaded ? (
        <div>
          <div>
            <div className=' mb-14'>
              <div className='mb-4 text-2xl font-semibold'>
                Available subscription
              </div>
              <Swiper
                modules={[Pagination]}
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 2,
                  },
                  1600: {
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={20}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                pagination={{ clickable: true }}
                className='outsideSliderPagination pb-4'
              >
                {!loading ? (
                  propertiesData && propertiesData.length > 0 ? (
                    propertiesData.map((property, index: number) => {
                      return (
                        <SwiperSlide key={index} className='sm:min-w-[250px] '>
                          <ItemCard propertyData={property} />
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <div className=' center py-10 text-base font-semibold'>
                      No Data to show{' '}
                    </div>
                  )
                ) : (
                  <div className='center py-10'>
                    <Loader2 className=' animate-spin' />{' '}
                  </div>
                )}
              </Swiper>
            </div>
            <div className=' my-6'>
              <div className='mb-4 text-2xl font-semibold'>News</div>
              {!NewsLoading ? (
                News && News.length > 0 ? (
                  <Swiper
                    modules={[Pagination]}
                    breakpoints={{
                      300: {
                        slidesPerView: 1.2,
                      },
                      767: {
                        slidesPerView: 2.2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1280: {
                        slidesPerView: 3,
                      },
                      1600: {
                        slidesPerView: 4,
                      },
                    }}
                    spaceBetween={20}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    pagination={{ clickable: true }}
                    className='outsideSliderPagination'
                  >
                    {News.map((news, index: number) => {
                      return (
                        <SwiperSlide key={index} className=''>
                          <NewsCard news={news} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                ) : (
                  <div className=' center py-10 text-base font-semibold'>
                    No Data to show{' '}
                  </div>
                )
              ) : (
                <div className='center py-10'>
                  <Loader2 className=' animate-spin' />{' '}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className=' center h-full w-full'>Loading....</div>
      )}
    </>
  );
};

export default Home;
