
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {
    
    renderWeather(cityData) { // render a single row/city
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temps) // map over api data for each city and go inside and get list-main-temperature (see api data)

        return ( // cityData will be our response from our api
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" />      
                </td> 
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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