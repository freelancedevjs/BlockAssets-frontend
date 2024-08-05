import React from 'react';

interface DynamicContentRendererProps {
  name: string;
  content: string;
}

const DynamicContentRenderer: React.FC<DynamicContentRendererProps> = ({
  name,
  content,
}) => {
  return (
    <div>
      <p className='my-2 font-semibold text-[#333333]'>{name}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default DynamicContentRenderer;
