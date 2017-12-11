
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    
    renderWeather(cityData) { // render a single row/city
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp); // map over api data for each city and go inside and get list-main-temperature (see api data)
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord; // find the coord obj and grab the lon and lat properties and assign to new variables called lon and lat (destructuring)

        return ( // cityData will be our response from our api
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody> 
                    {this.props.weather.map(this.renderWeather)} 
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) { // same thing as const weather = state.weather
    return { weather }; // same as weather: weather
}

export default connect(mapStateToProps)(WeatherList);