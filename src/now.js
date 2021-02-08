import Conf from 'conf';
import Table from 'cli-table3';
import { configKey } from './configure';
import {
  validateApiKey,
  validateCityId,
  validateUnits,
  queryCurrentWeather
} from './utils';

export async function now(args) {
  const config = new Conf().get(configKey);
  const apiKey =
    args.apiKey ||
    args.apikey ||
    args['api-key'] ||
    args.key ||
    args.k ||
    config.apiKey;
  if (!validateApiKey(apiKey)) {
    return;
  }
  const cityId =
    args.city ||
    args.cityId ||
    args.cityID ||
    args['city-id'] ||
    args.c ||
    config.cityId;
  if (!validateCityId(cityId)) {
    return;
  }
  const units = args.units || args.unit || args.u || config.units;
  if (!validateUnits(units)) {
    return;
  }

  const { data } = await queryCurrentWeather(cityId, units, apiKey);

  const table = new Table({
    head: ['City', 'DateTime', 'Weather', 'Temp'],
    colWidths: [15, 23, 18, 10],
    wordWrap: true
  });
  table.push([
    data.name,
    new Date(data.dt * 1000).toLocaleString(),
    data.weather[0].description,
    data.main.temp
  ]);
  console.log(table.toString());
}

// below is an example response from the OpenWeatherMap API
const exampleData = {
  coord: { lon: -91.53, lat: 41.66 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
  base: 'stations',
  main: {
    temp: 27.6,
    pressure: 1011,
    humidity: 37,
    temp_min: 26.67,
    temp_max: 29
  },
  visibility: 16093,
  wind: { speed: 7.2, deg: 200, gust: 11.8 },
  clouds: { all: 1 },
  dt: 1569351207,
  sys: {
    type: 1,
    id: 3359,
    message: 0.0079,
    country: 'US',
    sunrise: 1569326121,
    sunset: 1569369663
  },
  timezone: -18000,
  id: 4862034,
  name: 'Iowa City',
  cod: 200
};
