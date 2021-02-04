export const appConfig = {
  defaultUnit: 'metric',
  defaultCity: { // Amalapuram as default city.
    coord: {
      latitude: 16.5775,
      longitude: 82.0031
    }
  }
};

export const apiConfig = {
  host: 'https://api.openweathermap.org/data/2.5',
  appId: '0f3fb9fa31ad3d41f1bb2bd0841c3f2f', //openweathermap api key
  measurementUnits: {
    metric: {
      temperature: 'C',
      windSpeed: 'm/s',
      pressure: 'mmHg'
    },
    imperial: {
      temperature: 'F',
      windSpeed: 'mil/h',
      pressure: 'hPa'
    }
  },
  amountForecastDays: 16,
  updateInterval: {
    forecast: 300000, // 5 minutes
    weather: 300000 // 5 minutes
  }
};
