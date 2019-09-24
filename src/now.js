import Conf from 'conf';
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

  const result = await queryCurrentWeather(cityId, units, apiKey);
  console.log(result.data);
}
