import Detail from '@/components/Detail'
import React from 'react'

const DetailPage = ({ params }: { params: { propertyID: string } }) => {
  return (
    <>
    <Detail propertyID={params.propertyID} />
    </>
  )
}

export default DetailPage