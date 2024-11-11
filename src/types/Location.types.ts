import { RESPONSE_ERROR, RESPONSE_SUCCESS } from "../constants/status.constants";

export type TCity = "trondheim" | "oslo" | "bergen" | "stavanger" | "kristiansand" | "tromsø" | "bodø" | "ålesund" | "berlin" | "paris" | "london" | "new york" | "los angeles" | "san francisco" | "tokyo" | "beijing";
export type TLatLong = [number | null, number | null];

export type TLocation = {
  units: {
    temperature: string;
    humidity: string;
    pressure: string;
    windSpeed: string;
  }
  title: TCity;
  temperature: {
    curr: number;
    min: number;
    max: number;
  };
  weather: {
    symbol: string;
    sunrise: string;
    sunset: string;
    humidity: number;
    pressure: number;
    windSpeed: number;
  }
}

export type TLocationResponse = {
  status: typeof RESPONSE_SUCCESS | typeof RESPONSE_ERROR;
  message?: string;
  data: TLocation;
}

export function isLocationResponse(data: TLocationResponse | Error): data is TLocationResponse {
  return (data as TLocationResponse).data !== undefined;
}