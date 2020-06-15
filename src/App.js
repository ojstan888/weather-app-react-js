import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "3976851ba0b3d3485166e96cf60ef05f";
class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    try {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      if(city) {
  
        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          error: undefined
        });
      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          error: "Введите название города!"
        });
      }
    } catch (e) {
      this.setState({
        temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
        error: 'Такого города не существует. Попробуйте еще раз!'
      })
    }
    
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
              <div className="row">
                <div className="info">
                <Info/>
                </div>
                <div className="form">
                <Form 
                  weatherMethod={this.gettingWeather}
                />

                <Weather 
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  error={this.state.error} 
                />
                </div>
              </div>
            </div>
        </div>
    );
  }
}
export default App;