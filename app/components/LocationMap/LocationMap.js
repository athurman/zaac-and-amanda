import {default as React, Component} from 'react';

import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 *
 * Add <script src='https://maps.googleapis.com/maps/api/js'></script> to your HTML to provide google.maps reference
 */
export default class LocationMap extends Component {
  state = {
    markers: [{
      position: {
        lat: 35.785183,
        lng: -86.485065,
      },
      key: 'WrensNest'
    }],
  };
  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick (event) {
    var {markers} = this.state
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    })
    this.setState({ markers })

    if (3 === markers.length) {
      this.props.toast(
        'Right click on the marker to remove it',
        'Also check the code!'
      )
    }
  }

  handleMarkerRightclick(index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    var {markers} = this.state
    markers = update(markers, {
      $splice: [
        [index, 1]
      ],
    })
    this.setState({ markers })
  }

  render () {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              height: '100%',
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
            defaultZoom={7}
            defaultCenter={{lat: 35.785183, lng: -86.485065}}
            onClick={::this.handleMapClick}>
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={this.handleMarkerRightclick.bind(this, index)} />
              );
            })}
          </GoogleMap>
        }
      />
    );
  }
}
