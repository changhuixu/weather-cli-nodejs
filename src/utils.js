import axios from 'axios';
import chalk from 'chalk';

export function validateApiKey(apiKey) {
  if (!apiKey || apiKey.length !== 32) {
    console.error(
      chalk.redBright(
        `API Key for OpenWeatherMap service has not been set up yet.`
      )
    );
    console.warn(
      `Please use command ${chalk.greenBright(
        'weather config --apiKey'
      )} to save your API key.
        `
    );
    return false;
  }
  return true;
}

export function validateCityId(cityId) {
  if (!Number.isInteger(cityId) || cityId < 1) {
    console.error(
      chalk.redBright(
        `CityID for OpenWeatherMap service is invalid. Only number is allowed.`
      )
    );
    console.warn(
      `Please use command ${chalk.greenBright(
        'weather config --cityId'
      )} to save your default city ID or use command flag ${chalk.greenBright(
        '--cityId [-c]'
      )} to specify your city ID.
        `
    );
    return false;
  }
  return true;
}

export function validateUnits(units) {
  if (!units || ['c', 'C', 'f', 'F', 'k', 'K'].indexOf(units[0]) < 0) {
    console.error(
      chalk.redBright(
        `Temperature Units for OpenWeatherMap service is invalid.`
      )
    );
    console.warn(
      `Allowed values are: ${chalk.greenBright('Kelvin')}, ${chalk.greenBright(
        'Celsius'
      )}, ${chalk.greenBright('Fahrenheit')}.
        `
    );
    return false;
  }
  return true;
}

export async function queryCurrentWeather(cityId, units, apiKey) {
  const baseUri = 'http://api.openweathermap.org/data/2.5/weather';
  const url = getApiUrl(baseUri, cityId, units, apiKey);
  return await axios({
    method: 'get',
    url: url
  });
}

export async function queryWeatherForecast(cityId, units, apiKey) {
  const baseUri = 'http://api.openweathermap.org/data/2.5/forecast';
  const url = getApiUrl(baseUri, cityId, units, apiKey);
  return await axios({
    method: 'get',
    url: url
  });
}

function getApiUrl(baseUri, cityId, units, apiKey) {
  let url = baseUri + `?id=${cityId}`;
  if (units[0] === 'c' || units[0] === 'C') {
    url += '&units=metric';
  } else if (units[0] === 'f' || units[0] === 'F') {
    url += '&units=imperial';
  }
  url += `&APPID=${apiKey.trim()}`;
  return url;
}
