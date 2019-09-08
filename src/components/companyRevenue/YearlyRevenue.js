import React, { Component } from 'react';
import Chart from '../charts/Chart.jsx';

class YearlyRevenue extends Component {
  constructor(props) {
    super(props);
    this.companyName = '';
  }
  render() {
    const { revenue } = this.props;
    if (revenue) {
      this.companyName = revenue.companyData.companyName;
      const data = [];
      const revenueData = revenue.companyData.revenue[0];
      for (var x in revenueData) {
        data.push(parseFloat(revenueData[x].split(',').join('') / 10000));
      }
      return (
        <div id="bar-chart">
          <Chart companyName={this.companyName} data={data} />
        </div>
      );
    }
  }
}
export default YearlyRevenue;
