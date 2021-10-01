import React, { Fragment } from 'react';
import { LoadScript } from '@react-google-maps/api'
const { REACT_APP_GOOGLE_MAP_API_KEY } = process.env;

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};


const GoogleMap = props => {


    return (
        <Fragment>
            <LoadScript
                googleMapsApiKey={REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </Fragment>
    );
};


export default GoogleMap;