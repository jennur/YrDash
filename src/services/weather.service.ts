import axios from "axios";
import { nameToGeoCoords } from "../utils/geo.utils";
import { TCity, TLatLong } from "../types/Location.types";
import { TLocationResponse } from "../types/Location.types";
import { parseLocationData } from "../utils/location.utils";

export async function getCurrentWeather(location: string):Promise<TLocationResponse> {
  try {
    const city = location as TCity;
    const [lat, long]: TLatLong = nameToGeoCoords[city];

    const weatherResponse = await axios.get(
      `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${long}`
    );

    const sunResponse = await axios.get(
      `https://api.met.no/weatherapi/sunrise/3.0/sun?lat=${lat}&lon=${long}`
    );

    return parseLocationData(city, weatherResponse?.data, sunResponse?.data?.properties);
  } catch (error: any) {
    console.error("[getCurrentWeather]", error);
    return parseLocationData(location as TCity, {}, {});
  }
}