import axios from "axios";
import { getCurrentWeather } from "./weatherService";
import { nameToGeoCoords } from "../../utils/geo.utils";
import {jest, beforeEach, expect, describe, it} from '@jest/globals';
import {mockWeatherResponse, mockSunResponse} from './weatherService.mocks';
import { INVALID_LOCATION } from "../../constants/error.constants";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getCurrentWeather", () => {
  const city = "london";
  const [lat, long] = nameToGeoCoords[city];

  const mockErrorResult = {
    status: 'error',
    message: 'No results found',
    data: {
      title: city,
      units: {
        temperature: undefined,
        humidity: undefined,
        pressure: undefined,
        windSpeed: undefined
      },
      temperature: { curr: NaN, min: NaN, max: NaN },
      weather: {
        symbol: undefined,
        sunrise: 'N/A',
        sunset: 'N/A',
        humidity: 'N/A',
        pressure: 'N/A',
        windSpeed: 'N/A'
      }
    }
  };

  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  it("should return weather data successfully", async () => {
    mockedAxios.get
    .mockResolvedValueOnce(mockWeatherResponse)
    .mockResolvedValueOnce(mockSunResponse);

    const result = await getCurrentWeather(city);

    expect(mockedAxios.get).toHaveBeenCalledTimes(2);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${long}`
    );
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api.met.no/weatherapi/sunrise/3.0/sun?lat=${lat}&lon=${long}`
    );
    expect(result).toStrictEqual({
      data: {
        title: 'london',
        units: {
          temperature: 'celsius',
          humidity: '%',
          pressure: 'hPa',
          windSpeed: 'm/s'
        },
        temperature: { curr: 13, min: 13, max: 18 },
        weather: {
          symbol: 'heavyrain',
          sunrise: '08:10 AM',
          sunset: '05:17 PM',
          humidity: 90,
          pressure: 1017.8,
          windSpeed: 5
        }
      },
      status: 'success'
    });
  });

  it("should return default data on response errors on first call", async () => {
    mockedAxios.get
      .mockRejectedValueOnce(new Error("Weather API error"))
      .mockRejectedValueOnce(mockSunResponse);

    const result = await getCurrentWeather(city);

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockErrorResult);
  });

  it("should return default data on response error on second call", async () => {
    mockedAxios.get
      .mockResolvedValueOnce(mockWeatherResponse)
      .mockRejectedValueOnce(new Error("Sunrise API error"));

    const result = await getCurrentWeather(city);

    expect(mockedAxios.get).toHaveBeenCalledTimes(2);
    expect(result).toEqual(mockErrorResult);
  });

  it("should return error on invalid location", async () => {
    const city = "test";
    const result = await getCurrentWeather(city);

    expect(mockedAxios.get).toHaveBeenCalledTimes(0);
    expect(result).toEqual(Error(INVALID_LOCATION));
  });
});
