"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import tokenImg from "~/images/BNBicon.png"



const OrderSection = () => {
  return (
    <div>
      <div className="overflow-x-auto mb-10 bg-white rounded-xl min-h-screen">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className='border-b'>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Name</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Type</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Unit Price</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Executed</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Quantity</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Fee</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Total Amount</th>
              <th className="px-4 py-4 whitespace-nowrap text-left font-normal text-text-gray text-sm">Time</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className='border-b last:border-b-0'>
                <td className=" px-4 py-3 whitespace-nowrap">
                  <Link href={`/trade/${index}`} key={index}>
                    <div className='flex items-center gap-3'>
                      <Image src={tokenImg} alt="token" className="w-8 h-8" />
                      <div>AKR</div>
                    </div>
                  </Link>
                </td>
                <td className=" px-4 py-3 whitespace-nowrap text-red-400 font-semibold">Sell</td>
                <td className=" px-4 py-3 whitespace-nowrap">$518</td>
                <td className=" px-4 py-3 whitespace-nowrap">$6,918</td>
                <td className=" px-4 py-3 whitespace-nowrap">377</td>
                <td className=" px-4 py-3 whitespace-nowrap">$7,918</td>
                <td className=" px-4 py-3 whitespace-nowrap text-red-400 font-semibold">$5000</td>
                <td className=" px-4 py-3 whitespace-nowrap">2023-09-23 12:23:48</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className='w-full flex justify-end items-center'>
          <div className='flex items-center gap-3 p-4'>
            <p className='text-2xl text-gray-300'>{"<"}</p>
            <p className='text-sm'>{"1"}</p>
            <p className='bg-gray-300 h-5 w-5 flex justify-center items-center text-center rounded-sm text-sm'>{"2"}</p>
            <p className='text-sm'>{"3"}</p>
            <p className='text-sm'>{"4"}</p>
            <p className='text-2xl text-black'>{">"}</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default OrderSection