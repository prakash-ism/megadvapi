import React, { Component } from 'react';
import PieClass from '../PieCharts/Pie';
import { Redirect } from 'react-router-dom';

class CountryRevenue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { revenue } = this.props;
    if (revenue.countryData) {
      let data = [];
      data = revenue.countryData.map((item, index) => {
        let revenueData = item.revenue[0];
        let tempData = [];
        for (var x in revenueData) {
          tempData.push(parseFloat(revenueData[x].split(',').join('') / 10000));
        }

        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        return {
          companyName: item.companyName,
          value: tempData.reduce(reducer)
        };
      });
      return (
        <div className="countryRevenue">
          <PieClass countryName={this.props.countryName} data={data} width={400} height={400} innerRadius={0} outerRadius={200} />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default CountryRevenue;
