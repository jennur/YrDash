import { TLocation } from "../../types/Location.types";

export type TWeatherDetailsProps = TLocation["weather"] & {
  units: TLocation["units"];
};
