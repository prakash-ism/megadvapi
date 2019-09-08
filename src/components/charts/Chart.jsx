import React, { Component } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import Axes from './Axes.jsx';
import Bars from './Bars';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.xScale = scaleBand();
    this.yScale = scaleLinear();
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 };
    const svgDimensions = { width: 800, height: 500 };

    const maxValue = Math.max(...this.props.data);

    // scaleBand type
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const xScale = this.xScale
      .padding(0.5)
      // scaleBand domain should be an array of specific values
      // in our case, we want to use movie titles
      .domain(month.map(d => d))
      .range([margins.left, svgDimensions.width - margins.right]);

    // scaleLinear type
    const yScale = this.yScale
      // scaleLinear domain required at least two values, min and max
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    return (
      <div className="bar-chart">
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          {/* // Bars and Axis comes here */}
          <Axes scales={{ xScale, yScale }} margins={margins} svgDimensions={svgDimensions} />
          <Bars
            scales={{ xScale, yScale }}
            margins={margins}
            data={this.props.data}
            month={month}
            maxValue={maxValue}
            svgDimensions={svgDimensions}
          />
        </svg>
        <div className="pie-chart-description">{`Monthly distribution of ${this.props.companyName}(Data is in 10000)`}</div>
      </div>
    );
  }
}
