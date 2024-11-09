import { RESPONSE_ERROR, RESPONSE_SUCCESS } from "../constants/status.constants";
import { TCity, TLocationResponse, TLocation } from "../types/Location.types";

export function parseLocationData(city: TCity, data: any): TLocationResponse {
  const units = data?.properties?.meta?.units;
  const timeseries = data?.properties?.timeseries;

  if (!timeseries || timeseries.length === 0) {
    return {
      status: RESPONSE_ERROR,
      message: "No results found",
      data: populateLocationData(city, {}, {})
    };
  }

  return {
    data: populateLocationData(city, timeseries[0]?.data, units),
    status: RESPONSE_SUCCESS
  }
};

function populateLocationData(city: TCity, data: any, units: any): TLocation {
  const instantDetails = data?.instant?.details || {};
  const next6HoursDetails = data?.next_6_hours?.details || {};
  const weatherSymbol = data?.next_1_hours?.summary?.symbol_code;

  return {
    title: city,
    units: {
      temperature: units?.air_temperature,
      humidity: units?.relative_humidity,
      pressure: units?.air_pressure_at_sea_level,
      windSpeed: units?.wind_speed
    },
    temperature: {
      curr: Math.round(instantDetails?.air_temperature),
      min: Math.round(next6HoursDetails?.air_temperature_min),
      max: Math.round(next6HoursDetails?.air_temperature_max),
    },
    weather: {
      symbol: weatherSymbol,
      sunrise: "N/A",
      sunset: "N/A",
      humidity: instantDetails?.relative_humidity,
      pressure: instantDetails?.air_pressure_at_sea_level,
      windSpeed: instantDetails?.wind_speed
    }
  }
}