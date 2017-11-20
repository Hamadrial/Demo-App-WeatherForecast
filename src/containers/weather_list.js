import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temps) => temps - 273) ;
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={ cityName } className="text-center search-result">
        <td className="search-result__cityName search-result__map">
          <GoogleMap lon={ lon } lat={ lat } />
        </td>
        <td>
          <Chart data={ temps } color="blue" units="&deg;C" />
        </td>
        <td>
          <Chart data={ pressures } color="green" units="hPa" />
        </td>
        <td>
          <Chart data={ humidities } color="black" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-center">City</th>
            <th className="text-center">Temperature (&deg;C)</th>
            <th className="text-center">Pressure (hPa)</th>
            <th className="text-center">Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          { this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // ({weather}): const weather = state.weather
  // return { weather: weather }; can be written as below
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
