export const mockWeatherResponse = {
  data: {
    properties: {
      meta: {
        units: {
          air_pressure_at_sea_level: 'hPa',
          air_temperature: 'celsius',
          air_temperature_max: 'celsius',
          air_temperature_min: 'celsius',
          cloud_area_fraction: '%',
          cloud_area_fraction_high: '%',
          cloud_area_fraction_low: '%',
          cloud_area_fraction_medium: '%',
          dew_point_temperature: 'celsius',
          fog_area_fraction: '%',
          precipitation_amount: 'mm',
          relative_humidity: '%',
          ultraviolet_index_clear_sky: '1',
          wind_from_direction: 'degrees',
          wind_speed: 'm/s',
        },
        updated_at: '2024-11-10T19:15:41Z',
      },
      timeseries: [
        {
          data: {
            instant: {
              details: {
                air_pressure_at_sea_level: 1017.8,
                air_temperature: 13.3,
                cloud_area_fraction: 100,
                cloud_area_fraction_high: 100,
                cloud_area_fraction_low: 0.8,
                cloud_area_fraction_medium: 100,
                dew_point_temperature: 11.7,
                fog_area_fraction: 0,
                relative_humidity: 90,
                ultraviolet_index_clear_sky: 0,
                wind_from_direction: 344.8,
                wind_speed: 5,
              },
            },
            next_12_hours: {
              details: {},
              summary: {symbol_code: 'lightrainshowers_day'},
            },
            next_1_hours: {
              details: {precipitation_amount: 1.2},
              summary: {symbol_code: 'heavyrain'},
            },
            next_6_hours: {
              details: {
                air_temperature_max: 17.6,
                air_temperature_min: 13.3,
                precipitation_amount: 2.4,
              },
              summary: {symbol_code: 'rain'},
            },
          },
        },
      ],
    },
  },
};

export const mockSunResponse = {
  data: {
    copyright: 'MET Norway',
    geometry: {coordinates: [-0.1, 51.5], type: 'Point'},
    licenseURL: 'https://api.met.no/license_data.html',
    properties: {
      body: 'Sun',
      solarmidnight: {
        disc_centre_elevation: -55.71,
        time: '2024-11-09T23:44+00:00',
        visible: false,
      },
      solarnoon: {
        disc_centre_elevation: 21.15,
        time: '2024-11-10T11:44+00:00',
        visible: true,
      },
      sunrise: {azimuth: 117.36, time: '2024-11-10T07:10+00:00'},
      sunset: {azimuth: 242.47, time: '2024-11-10T16:17+00:00'},
    },
    type: 'Feature',
    when: {interval: ['2024-11-09T23:44:00Z', '2024-11-11T00:00:00Z']},
  },
};
