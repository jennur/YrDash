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
  const { instant: { details: instantDetails = {} }, next_6_hours: { details: next6HoursDetails = {} } } = data || {};
  return {
    title: city,
    units: {
      temperature: units?.air_temperature,
      humidity: units?.relative_humidity,
      pressure: units?.air_pressure_at_sea_level,
      windSpeed: units?.wind_speed
    },
    temperature: {
      curr: instantDetails?.air_temperature,
      min: next6HoursDetails?.air_temperature_min,
      max: next6HoursDetails?.air_temperature_max,
    },
    weatherType: "Unknown",
    weather: {
      sunrise: "N/A",
      sunset: "N/A",
      humidity: instantDetails?.relative_humidity,
      pressure: instantDetails?.air_pressure_at_sea_level,
      windSpeed: instantDetails?.wind_speed
    }
  }
}