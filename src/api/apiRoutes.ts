export const ApiRoutes = {
  register: "/auth/register",
  login: "/auth/login",
  verify: (email: string) => `/auth/verifyUser?email=${email}`,
  allRoutes: "/routes",
  getUser: (userId: string) => `/auth/getUser/${userId}`,
  getRouteInfo: (routeId: string) => `/routes/${routeId}/trips`,
};
