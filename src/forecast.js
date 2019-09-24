import Conf from 'conf';
import Table from 'cli-table3';
import { configKey } from './configure';
import {
  validateApiKey,
  validateCityId,
  validateUnits,
  queryWeatherForecast
} from './utils';

export async function forecast(args) {
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

  const { data } = await queryWeatherForecast(cityId, units, apiKey);

  const table = new Table({
    head: ['DateTime', 'Weather', 'Temp'],
    colWidths: [23, 18, 7],
    wordWrap: true
  });
  data.list.forEach(w => {
    table.push([w.dt_txt, w.weather[0].description, w.main.temp]);
  });
  console.log(table.toString());
}

// below is an example response from the OpenWeatherMap API
const exampleData = {
  cod: '200',
  message: 0.0081,
  cnt: 40,
  list: [
    {
      dt: 1569380400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: [Object],
      sys: [Object],
      dt_txt: '2019-09-25 03:00:00'
    },
    {
      dt: 1569391200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: [Object],
      sys: [Object],
      dt_txt: '2019-09-25 06:00:00'
    },
    {
      dt: 1569402000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-25 09:00:00'
    },
    {
      dt: 1569412800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-25 12:00:00'
    },
    {
      dt: 1569423600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-25 15:00:00'
    },
    {
      dt: 1569434400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-25 18:00:00'
    },
    {
      dt: 1569445200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-25 21:00:00'
    },
    {
      dt: 1569456000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-26 00:00:00'
    },
    {
      dt: 1569466800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-26 03:00:00'
    },
    {
      dt: 1569477600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-26 06:00:00'
    },
    {
      dt: 1569488400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-26 09:00:00'
    },
    {
      dt: 1569499200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-26 12:00:00'
    },
    {
      dt: 1569510000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-26 15:00:00'
    },
    {
      dt: 1569520800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-26 18:00:00'
    },
    {
      dt: 1569531600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-26 21:00:00'
    },
    {
      dt: 1569542400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-27 00:00:00'
    },
    {
      dt: 1569553200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-27 03:00:00'
    },
    {
      dt: 1569564000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-27 06:00:00'
    },
    {
      dt: 1569574800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: [Object],
      sys: [Object],
      dt_txt: '2019-09-27 09:00:00'
    },
    {
      dt: 1569585600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: [Object],
      sys: [Object],
      dt_txt: '2019-09-27 12:00:00'
    },
    {
      dt: 1569596400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: [Object],
      sys: [Object],
      dt_txt: '2019-09-27 15:00:00'
    },
    {
      dt: 1569607200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: [Object],
      sys: [Object],
      dt_txt: '2019-09-27 18:00:00'
    },
    {
      dt: 1569618000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: [Object],
      sys: [Object],
      dt_txt: '2019-09-27 21:00:00'
    },
    {
      dt: 1569628800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: {},
      sys: [Object],
      dt_txt: '2019-09-28 00:00:00'
    },
    {
      dt: 1569639600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-28 03:00:00'
    },
    {
      dt: 1569650400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-28 06:00:00'
    },
    {
      dt: 1569661200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-28 09:00:00'
    },
    {
      dt: 1569672000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-28 12:00:00'
    },
    {
      dt: 1569682800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-28 15:00:00'
    },
    {
      dt: 1569693600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-28 18:00:00'
    },
    {
      dt: 1569704400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-28 21:00:00'
    },
    {
      dt: 1569715200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-29 00:00:00'
    },
    {
      dt: 1569726000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-29 03:00:00'
    },
    {
      dt: 1569736800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-29 06:00:00'
    },
    {
      dt: 1569747600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-29 09:00:00'
    },
    {
      dt: 1569758400,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: [Object],
      sys: [Object],
      dt_txt: '2019-09-29 12:00:00'
    },
    {
      dt: 1569769200,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      sys: [Object],
      dt_txt: '2019-09-29 15:00:00'
    },
    {
      dt: 1569780000,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: [Object],
      sys: [Object],
      dt_txt: '2019-09-29 18:00:00'
    },
    {
      dt: 1569790800,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: [Object],
      sys: [Object],
      dt_txt: '2019-09-29 21:00:00'
    },
    {
      dt: 1569801600,
      main: [Object],
      weather: [Array],
      clouds: [Object],
      wind: [Object],
      rain: {},
      sys: [Object],
      dt_txt: '2019-09-30 00:00:00'
    }
  ],
  city: {
    id: 4862034,
    name: 'Iowa City',
    coord: { lat: 41.6611, lon: -91.5302 },
    country: 'US',
    timezone: -18000,
    sunrise: 1569326121,
    sunset: 1569369663
  }
};
