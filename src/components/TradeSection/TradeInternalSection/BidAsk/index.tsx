import React from 'react'

const BidAsk = () => {
  return (
    <div className='w-full flex justify-center my-7'>
      <div className="overflow-x-auto mb-10 rounded-xl w-full max-w-lg border">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className='border-b bg-white'>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Size</th>
              <th className="px-4 py-4 whitespace-nowrap text-right font-medium text-green-500 text-sm ">Bid</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-red-500 text-sm">Ask</th>
              <th className="px-4 py-4 whitespace-nowrap text-right font-normal text-text-gray text-sm">Size</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 11 }).map((_, index) => (
              <tr key={index} className='border-b bg-primary-gray bg-opacity-60'>
                <td className=" px-4 py-3 whitespace-nowrap">
                  <span className='text-text-gray mr-2'>{index + 1} </span>4970
                </td>
                <td className=" px-4 py-3 whitespace-nowrap text-green-500 text-right">4970</td>
                <td className=" px-4 py-3 whitespace-nowrap text-red-500 text-left">4980</td>
                <td className=" px-4 py-3 whitespace-nowrap text-right">
                  721<span className='text-text-gray ml-2'>{index + 1} </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BidAsk