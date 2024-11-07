export type TLocation = {
  title: string;
  temperature: {
    curr: number;
    min: number;
    max: number;
  };
  weatherType: string;
  weather: {
    sunrise: string;
    sunset: string;
    humidity: number;
    visibility: number;
  }
}

export type TLocationSummary = Pick<TLocation, 'title' | 'temperature'>;

