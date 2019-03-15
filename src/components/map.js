import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 21.027763,
      lng: 105.834160,
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '150px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCC9HjX3HVYGgCLl2sFsZKniTwBdUa51LM'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={21.027763}
            lng={105.834160}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const AnyReactComponent = () => <div></div>;

export default Map;