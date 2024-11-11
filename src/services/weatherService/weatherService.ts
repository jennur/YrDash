import axios from "axios";
import { nameToGeoCoords } from "../../utils/geo.utils";
import { TCity, TLatLong } from "../../types/Location.types";
import { TLocationResponse } from "../../types/Location.types";
import { parseLocationData } from "../../utils/location.utils";
import { INVALID_LOCATION } from "../../constants/error.constants";

export async function getCurrentWeather(location: string):Promise<TLocationResponse | Error> {
  try {
    const city = location as TCity;
    const [lat, long]: TLatLong = nameToGeoCoords[city] ?? [null, null];

    if (!lat || !long) throw Error(INVALID_LOCATION);

    const weatherResponse = await axios.get(
      `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${long}`
    );

    const sunResponse = await axios.get(
      `https://api.met.no/weatherapi/sunrise/3.0/sun?lat=${lat}&lon=${long}`
    );

    return parseLocationData(city, weatherResponse?.data, sunResponse?.data?.properties);
  } catch (error: any) {
    console.error("[getCurrentWeather]", error);
    if (error?.message === INVALID_LOCATION) return error;
    return parseLocationData(location as TCity, {}, {});
  }
}