import { TCity, TLatLong } from "../types/Location.types";

export const nameToGeoCoords: Record<TCity, TLatLong> = {
  "trondheim": [63.43049, 10.39506],
  "oslo": [59.91273, 10.74609],
  "bergen": [60.39299, 5.32415],
  "stavanger": [58.97005, 5.73332],
  "kristiansand": [58.14622, 7.99558],
  "tromsø": [69.6496, 18.956],
  "bodø": [67.2803, 14.40466],
  "ålesund": [62.47225, 6.14948],
  "berlin": [52.52437, 13.41053],
  "paris": [48.85341, 2.3488],
  "london": [51.50853, -0.12574],
  "new york": [40.71427, -74.00597],
  "los angeles": [34.05223, -118.24368],
  "san francisco": [37.77493, -122.41942],
  "tokyo": [35.6895, 139.69171],
  "beijing": [39.9075, 116.39723],
}