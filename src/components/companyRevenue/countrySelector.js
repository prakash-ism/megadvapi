//untitled - 4
import React, { Component } from 'react';
import CountryRevenue from './countryRevenue';
import { connect } from 'react-redux';
import { selectCountry, getCountryNames } from '../../store/actions/selectionActions';

class CountrySelector extends Component {
  constructor(props) {
    super(props);
    this.countryName = '';
  }

  componentDidMount() {
    this.props.getCountryNames();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.countryName = e.target.value;
    this.props.selectCountry(e.target.value);
  };

  render() {
    const { revenue } = this.props;
    return (
      <div className="dashboard data-visual-wrapper">
        <div className="valign-wrapper row data-visual">
          <div className="col s12 m2 offset-m1 l3 center-align selectOption">
            {revenue &&
              revenue.countryNames &&
              revenue.countryNames.map((elem, index) => {
                return (
                  <div>
                    <button
                      onClick={this.handleSubmit}
                      value={elem}
                      style={{ margin: '5px' }}
                      className=" waves-effect waves-light btn"
                    >
                      {elem}
                    </button>
                  </div>
                );
              })}
          </div>

          <div className="col s12 m9 l9 center-align optionGraph">
            {revenue && <CountryRevenue countryName={this.countryName} revenue={revenue} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    revenue: state.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCountry: countryName => dispatch(selectCountry(countryName)),
    getCountryNames: () => dispatch(getCountryNames())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountrySelector);
