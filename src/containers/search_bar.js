
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        // you have bind onInputChange to "this" because its a callback function 
        //and the "this" inside of callback function refers to the docoment/window not the object/class
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event) {
        //console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        //Tells the browser to not reload the page each time submit goes through
        event.preventDefault();

        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term); // term here would be the city
        this.setState({ term: '' }); //empty the input value 
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input  
                    placeholder="Get a five-day forcast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button> 
                </span>
            </form>
        );
    }
}
// lets hook our container SearchBar to our actionCreater fetchWeater
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch); // makes sure the actions creator flows down to our middleware and down to our reducers
}

export default connect(null, mapDispatchToProps)(SearchBar);
// we pass null as first argument coz we dont need any state