import { TLocation } from "./Location.types";
import { RouteProp } from '@react-navigation/native';

export type TLocationDetailsRouteProp = RouteProp<{params: {location: TLocation}}, 'params'>;
