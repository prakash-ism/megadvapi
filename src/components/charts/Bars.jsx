import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';

export default class Bars extends Component {
  constructor(props) {
    super(props);

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(['#F3E5F5', '#7B1FA2'])
      .interpolate(interpolateLab);
  }

  render() {
    const { scales, margins, data, svgDimensions, month } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;

    const bars = data.map((datum, index) => (
      <rect
        key={index}
        x={xScale(month[index])}
        y={yScale(datum)}
        height={height - margins.bottom - scales.yScale(datum)}
        width={xScale.bandwidth()}
        fill={this.colorScale(datum)}
      />
    ));

    return <g>{bars}</g>;
  }
}
