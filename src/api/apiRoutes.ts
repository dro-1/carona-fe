export const ApiRoutes = {
  register: "/auth/register",
  login: "/auth/login",
  verify: (email: string) => `/auth/verifyUser?email=${email}`,
  allRoutes: "/routes",
  getUser: "/auth/getUser/",
  getRouteInfo: (routeId: string) => `/routes/${routeId}/trips`,
  pay: (tripId: string) => `/payments/pay/${tripId}`,
};
