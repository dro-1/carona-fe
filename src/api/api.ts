import axios from "axios";
import {
  CreateUserType,
  LoginType,
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
