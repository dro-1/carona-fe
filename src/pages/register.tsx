import logo from "./../assets/svg/logo.svg";

export const Register = () => {
  return (
    <div className="min-h-[100vh] bg-[#E2F4EA] flex justify-center items-center">
      <main className="w-[100vw] px-6 max-w-[800px] mx-auto">
        <img src={logo} className="w-[60%] mx-auto mb-20 mt-12" />
        <h1 className="text-3xl text-center text-[#319a64] mb-8">Register</h1>
        <form className="w-[80%] mx-auto space-y-4 mb-12">
          <label className="block" htmlFor="firstName">
            First Name
            <input
              className="block rounded text-lg py-1 px-2 w-full"
              placeholder=""
              id="firstName"
            />
          </label>
          <label className="block" htmlFor="lastName">
            Last Name
            <input
              className="block rounded text-lg py-1 px-2 w-full"
              placeholder=""
              id="lastName"
            />
          </label>
          <label className="block" htmlFor="phoneNumber">
            Phone Number
            <input
              className="block rounded text-lg py-1 px-2 w-full"
              placeholder=""
              id="phoneNumber"
              type="tel"
            />
          </label>
          <label className="block">
            Gender
            <div>
              <label className="mr-4 text-lg" htmlFor="male">
                <input
                  className="mr-2"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                />
                Male
              </label>
              <label className="mr-4 text-lg" htmlFor="female">
                <input
                  className="mr-2"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                />
                Female
              </label>
            </div>
          </label>
          <label className="block" htmlFor="email">
            Email
            <input
              className="block rounded text-lg py-1 px-2 w-full"
              placeholder=""
              id="email"
              type="email"
            />
          </label>
          <label className="block" htmlFor="password">
            Password
            <input
              className="block rounded text-lg py-1 px-2 w-full"
              placeholder=""
              type="password"
              id="password"
            />
          </label>
          <label className="block" htmlFor="confirmPassword">
            Confirm Password
            <input
              className="block rounded text-lg py-1 px-2 w-full"
              placeholder=""
              id="confirmPassword"
              type="password"
            />
          </label>
          <button className="bg-[#319A64] border-[#319A64] border-2 p-2 rounded-xl text-lg text-white block w-full">
            Sign up
          </button>
        </form>
      </main>
    </div>
  );
};
