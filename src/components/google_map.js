import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new window.google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      // Makes a direct reference to this div by refering to this.refs.map
      <div id="map"></div>
    );
  }
}

export default GoogleMap;
