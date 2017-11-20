import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="app-title">5 Days Weather Forecast</h1>
        <SearchBar />
        <div className="container">
          <WeatherList />
        </div>
      </div>
    );
  }
}
