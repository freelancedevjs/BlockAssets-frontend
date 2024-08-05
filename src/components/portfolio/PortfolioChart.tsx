import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['Token', 'Percentage'],
  ['SOMI', 60.0],
  ['USDT', 20.0],
  ['BNB', 9.2],
  ['Token Name', 10.8],
];

export const options = {
  title: 'My Portfolio',
  titleTextStyle: {
    fontWeight: 600,
    fontSize: 18,
    color: '#333333',
  },
  legend: {
    position: 'left',
    maxLines: 3,
    textStyle: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '20.24px',
      letterSpacing: '1%',
      color: '#000000',
    },
  },
};

export function PortfolioChart() {
  return (
    <div
      className='rounded-md border
    border-[#E6E6E6]'
    >
      <Chart
        chartType='PieChart'
        data={data}
        options={options}
        width='100%'
        height='400px'
      />
    </div>
  );
}
