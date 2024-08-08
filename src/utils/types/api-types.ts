export type CreateUserType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  password: string;
  confirmPassword: string;
  email: string;
  role: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type VerifyUserType = {
  email: string;
  otp: string;
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type Route = {
  start: string;
  end: string;
  estimatedTravelTime: string;
  distance: string;
  startLatLong: number;
  endLatLong: number;
  _id: string;
};

export type CaronaShareRoute = {
  start: string;
  end: string;
  estimatedTravelTime: string;
  price: string;
  departureTime: string;
  arrivalTime: string;
  _id: string;
};

export type RegisterCaronaShareHostType = {
  NIN: string;
  vehicleType: string;
  vehicleModel: string;
  vehicleColour: string;
  vehiclePlateNumber: string;
};

export type RegisterCaronaShareRiderType = {
  NIN: string;
};

export enum RouteType {
  go,
  share,
}
