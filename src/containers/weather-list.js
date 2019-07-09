import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const tempsArray = cityData.list.map(weather => weather.main.temp);
    const pressureArray = cityData.list.map(weather => weather.main.pressure);
    const humidityArray = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityData.city.id}>
        <td>{name}</td>
        <td>
          <Chart data={tempsArray} color="orange" units="F" />
        </td>
        <td>
          <Chart data={pressureArray} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidityArray} color="black" units="%" />
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
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);