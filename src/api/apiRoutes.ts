export const ApiRoutes = {
  register: "/auth/register",
  login: "/auth/login",
  verify: (email: string) => `/auth/verifyUser?email=${email}`,
  allRoutes: "/routes",
};
