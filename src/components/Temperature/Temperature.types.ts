import { TLocation } from "../../types/Location.types";

export type TTemperatureProps = {
  weatherSymbol: TLocation["weather"]["symbol"],
  temperature: TLocation["temperature"],
  unit: TLocation["units"]["temperature"],
};