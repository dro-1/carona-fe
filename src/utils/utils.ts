import { CaronaShareRoute, Route } from "./types/api-types";

export function isRoute(value: Route | CaronaShareRoute): value is Route {
  return "distance" in value;
}
