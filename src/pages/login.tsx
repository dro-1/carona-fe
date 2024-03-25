import logo from "./../assets/svg/logo.svg";

export const Login = () => {
  return (
    <div className="min-h-[100vh] bg-[#E2F4EA]">
      <main className="w-[100vw] px-6 max-w-[800px] mx-auto pt-20">
        <img src={logo} className="w-[60%] mx-auto mb-20 mt-12" />
        <h1 className="text-3xl text-center text-[#319a64] mb-8">Login</h1>
        <form className="w-[80%] mx-auto space-y-4 mb-12">
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
          <button className="bg-[#319A64] border-[#319A64] border-2 p-2 rounded-xl text-lg text-white block w-full">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};
