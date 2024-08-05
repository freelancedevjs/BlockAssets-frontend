'use client';
import React from 'react';
import FileIcon from '~/svg/file.svg';
import DownloadIcon from '~/svg/download.svg';
import { Status } from '@/components/Detail';
import { Property } from '@/generated/generated';
import moment from 'moment';
import renderHTML from 'react-render-html';

export const AttachmentItem = ({
  title,
  url,
}: {
  title: string;
  url: string;
}) => {
  return (
    <div className=' mb-2.5 flex items-center justify-between gap-2 rounded-lg bg-[#F2F6F6] px-4 py-2.5 last-of-type:mb-0'>
      <div className='flex items-center gap-3'>
        <div className=' bg-primary-gray center aspect-square h-10 w-10 min-w-fit rounded-full'>
          <FileIcon className={'w-4'} />
        </div>
        <span className=' text-xs font-medium md:text-sm'>{title}</span>
      </div>
      <div
        onClick={() => {
          window.open(url, '_blank');
        }}
      >
        <DownloadIcon className='aspect-square w-6' />
      </div>
    </div>
  );
};

interface IProps {
  status: Status;
  propertydata: Property;
}

const BasicInfo = (props: IProps) => {
  const { propertydata, status } = props;
  const basicInfo = propertydata.basic_info;
  const data = [
    { title: 'Address', value: propertydata.basic_info.address },
    { title: 'Zoning', value: propertydata.basic_info.zoning },
    {
      title: 'Gross Floor area',
      subvalues: [
        { title: 'This case', value: basicInfo.gross_floor_area.case },
        { title: 'Total', value: basicInfo.gross_floor_area.total },
      ],
    },
    {
      title: ' Land area',
      subvalues: [
        { title: 'This case', value: basicInfo.land_area.case },
        { title: 'Total', value: basicInfo.land_area.total },
      ],
    },
    { title: ' Floor', value: basicInfo.floor },
    {
      title: ' Completion date',
      value: moment(basicInfo.completion_date).format('DD MMM, YYYY'),
    },
    {
      title: ' Government assessed land value  ',
      value: basicInfo.government_land_value,
    },
  ];
  return (
    <div>
      <div className=' border-primary-gray mb-7 rounded-lg border p-5'>
        {data.map((info, index) => {
          return (
            <div
              className='border-primary-gray border-b py-2.5 last-of-type:border-0'
              key={index}
            >
              <div className='flex flex-wrap items-center justify-between gap-1'>
                <span className=' text-sm font-medium md:text-base'>
                  {info.title} :{' '}
                </span>
                {info.value && (
                  <span className=' text-xs font-normal text-[#808080] md:text-sm'>
                    {info.value}
                  </span>
                )}
              </div>
              {info.subvalues && (
                <div>
                  {info.subvalues.map((subvalues, index2) => {
                    return (
                      <div
                        key={index2}
                        className='my-1 flex items-center justify-between'
                      >
                        <span className=' text-sm font-medium'>
                          {subvalues.title} :{' '}
                        </span>
                        <span className=' text-sm font-normal text-[#808080]'>
                          {subvalues.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className='border-primary-gray mb-8  w-full rounded-lg border bg-white p-3'>
        {renderHTML(propertydata.content)}
      </div>
      <div className=' w-full bg-white text-base'>
        <div className=' mb-3 text-xl font-semibold'>Attachments</div>
        <div>
          {propertydata.attachments?.map((attachment) => {
            return (
              <AttachmentItem
                key={attachment.name}
                title={attachment.name || ''}
                url={attachment.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
