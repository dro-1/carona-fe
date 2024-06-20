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

export enum RouteType {
  go,
  share,
}
