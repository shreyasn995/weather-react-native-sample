import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Weather from './Weather';

import { API_KEY } from './constants';

export default class App extends Component {
  state = {
    isLoading: true,

    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      }
    );
  }

  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isLoading ? null
            : <Weather weatherCondition={this.state.weatherCondition} temperature={this.state.temperature} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});
