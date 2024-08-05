import { Token } from '@/app/(authenticated)/portfolio/portfolio';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

interface BarchartProps {
  chartWidth?: number;
  chartHeight?: number;
  tokens: Token[];
}

const PieChart: React.FC<BarchartProps> = ({
  chartWidth = 240,
  chartHeight = 240,
  tokens,
}) => {
  const ref = useRef<null | SVGSVGElement>(null);

  useEffect(() => {
    // Calculate total value of all tokens
    const totalValue = tokens.reduce(
      (acc, token) => acc + parseFloat(token.balance),
      0
    );

    // Prepare data with token percentages
    const data = tokens.map((token) => ({
      name: token.name,
      percentage: (parseFloat(token.balance) / totalValue) * 100,
    }));

    // Specify the chart’s dimensions.
    const width = chartWidth;
    const height = Math.min(width, chartHeight);

    // Create the color scale.
    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.name))
      .range(d3.schemeCategory10);

    // Create the pie layout and arc generator.
    const pie = d3
      .pie()
      .sort(null)
      .value((d: any) => d.percentage);

    const arc: any = d3
      .arc()
      .innerRadius(0)
      .outerRadius(Math.min(width, height) / 2 - 1);

    const arcs = pie(data);

    // append the svg object to the body of the page
    const svg = d3
      .select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .attr('style', 'max-width: 100%; height: auto; font: 10px sans-serif;');

    // Add a sector path for each value.
    svg
      .append('g')
      .selectAll()
      .data(arcs)
      .join('path')
      .attr('fill', (d: any) => color(d.data.name))
      .attr('d', arc)
      .append('title')
      .text((d: any) => `${d.data.name}: ${d.data.percentage.toFixed(1)}%`);
  }, [tokens, chartWidth, chartHeight]);

  return <svg width={460} height={400} id='piechart' ref={ref} />;
};

export default PieChart;
