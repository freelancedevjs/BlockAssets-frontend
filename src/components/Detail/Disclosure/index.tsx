import { Status } from '@/components/Detail';
import {
  Disclosure,
  Property,
  useDisclosuresQuery,
} from '@/generated/generated';
import { ChevronRight } from 'lucide-react';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';

export const DisclosureTab = ({
  data,
}: {
  data: Pick<Disclosure, 'createdAt' | 'name' | 'slug'> & {
    property: { slug: string };
  };
}) => {
  return (
    <Link href={`/hss/detail/${data.property.slug}/disclosure/${data.slug}`}>
      <div className=' flex cursor-pointer items-center justify-between rounded-lg bg-[#F2F6F6] px-5 py-3 last-of-type:mb-0'>
        <div>
          <div className=' text-sm font-medium text-[#808080]'>
            {moment(data.createdAt).format('YYYY/MM/DD HH:mm')}
          </div>
          <div className=' text-lg font-medium'>{data.name}</div>
        </div>
        <ChevronRight />
      </div>
    </Link>
  );
};

interface IProps {
  status: Status;
  propertyData: Property;
}

const Disclosure = (props: IProps) => {
  const { data, error, loading } = useDisclosuresQuery({
    variables: {
      input: {
        pagination: {
          page: 0,
          size: 10,
        },
        where: { property: { id: props.propertyData.id } },
      },
    },
  });

  const disclosures = data?.getDisclosures?.data;

  console.log(disclosures, error);

  return (
    <div className=' flex flex-col gap-2.5'>
      {disclosures &&
        disclosures.map((disclosure, index) => {
          return <DisclosureTab data={disclosure} key={index} />;
        })}
    </div>
  );
};

export default Disclosure;
