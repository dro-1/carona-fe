import axios from "axios";
import {
  CreateUserType,
  LoginType,
  RegisterCaronaShareHostType,
  RegisterCaronaShareRiderType,
  VerifyUserType,
} from "src/utils/types/api-types";
import { ApiRoutes } from "./apiRoutes";

export const BASE_URL = "https://carona-6a9f.onrender.com/api";

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("accessToken")
      ? `Bearer ${localStorage.getItem("accessToken")}`
      : "",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },

  baseURL: BASE_URL,
});

export const registerUser = (data: CreateUserType) => {
  return axiosInstance.post(ApiRoutes.register, {
    ...data,
    passwordConfirm: data.confirmPassword,
  });
};

export const login = (data: LoginType) => {
  return axiosInstance.post(ApiRoutes.login, data);
};

export const verifyUser = ({ email, otp }: VerifyUserType) => {
  return axiosInstance.post(ApiRoutes.verify(email), {
    token: otp,
  });
};

export const getAllRoutes = () => {
  return axiosInstance.get(ApiRoutes.allRoutes);
};

export const getUser = () => {
  return axiosInstance.get(ApiRoutes.getUser);
};

export const getRouteInfo = (routeId: string) => {
  return axiosInstance.post(ApiRoutes.getRouteInfo(routeId));
};

export const getPaymentLink = (tripId: string) => {
  return axiosInstance.post(ApiRoutes.pay(tripId));
};

export const getNotifications = () => {
  return axiosInstance.get(ApiRoutes.getNotifications);
};

export const getCaronaShareTrips = () => {
  return axiosInstance.get(ApiRoutes.getCaronaShareTrips);
};

export const createCaronaShareTrip = (departure: string, arrival: string) => {
  return axiosInstance.post(ApiRoutes.createCaronaShareTrip, {
    start: departure,
    end: arrival,
  });
};

export const registerCaronaShareHost = (data: RegisterCaronaShareHostType) => {
  return axiosInstance.post(ApiRoutes.registerAsHostCaronaShare, data);
};

export const registerCaronaShareRider = (
  data: RegisterCaronaShareRiderType
) => {
  return axiosInstance.post(ApiRoutes.registerAsRiderCaronaShare, data);
};

export const joinCaronaShareRide = (tripId: string) => {
  return axiosInstance.post(ApiRoutes.joinCaronaShareRide(tripId));
};
