import { CustomInput, PasswordInput } from "src/components/shared/input";
import logo from "./../assets/svg/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MutationKeys } from "src/utils/mutation-keys";
import { LoginType } from "src/utils/types/api-types";
import { login } from "src/api/api";
import toast from "react-hot-toast";
import { Loader } from "src/components/shared/loader";
import { useContext } from "react";
import { UserContext, UserContextType } from "src/context/user.context";

const formSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
  email: z.string().email("Email entered is invalid"),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setUser } = useContext(UserContext) as UserContextType;

  const navigate = useNavigate();

  const { isPending: isLoginPending, mutate: loginMutate } = useMutation({
    mutationKey: [MutationKeys.login],
    mutationFn: (data: LoginType) => login(data),
    onSuccess: (data) => {
      console.log(data);
      setUser(data.data.data.user);
      localStorage.setItem("accessToken", data.data.data.jwt.token);
      toast.success("User logged in successfully");
      navigate("/dashboard/carona-go");
    },
    onError: (data) => {
      console.log(data);
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    loginMutate(data);
  };
  return (
    <div className="min-h-[100vh] bg-[#E2F4EA] font-inter">
      <main className="w-[100vw] px-6 max-w-[800px] mx-auto pt-20">
        <img src={logo} className="w-[60%] mx-auto mb-20 mt-12" />
        <h1 className="text-3xl text-center text-[#319a64] mb-8">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[80%] mx-auto space-y-8 mb-12"
        >
          <CustomInput
            label="Email"
            type="email"
            placeholder="janedoe@gmail.com"
            error={errors.email?.message?.toString()}
            {...register("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="**********"
            error={errors.password?.message?.toString()}
            {...register("password")}
          />
          <div>
            <p className="mb-2">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#319A64]">
                Sign up
              </Link>
            </p>
            <button className="bg-[#319A64] border-[#319A64] px-3 py-[16px] border-2 font-inter rounded-xl text-lg text-white block w-full">
              {isLoginPending ? <Loader className="mx-auto" /> : "Sign in"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
