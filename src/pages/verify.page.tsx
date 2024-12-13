import { PasswordInput } from "src/components/shared/input";
import logo from "./../assets/svg/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MutationKeys } from "src/utils/mutation-keys";
import { VerifyUserType } from "src/utils/types/api-types";
import { verifyUser } from "src/api/api";
import toast from "react-hot-toast";
import { Loader } from "src/components/shared/loader";
import { useContext, useEffect } from "react";
import { UserContext, UserContextType } from "src/context/user.context";

const formSchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be at least 6 characters")
    .max(6, "OTP must be at least 6 characters"),
});

export const Verify = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const { verificationEmail } = useContext(UserContext) as UserContextType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!verificationEmail) navigate("/login");
  }, []);

  const { isPending: isVerificationPending, mutate: verificationMutate } =
    useMutation({
      mutationKey: [MutationKeys.verifyUser],
      mutationFn: (data: VerifyUserType) => verifyUser(data),
      onSuccess: (data) => {
        console.log(data);
        toast.success("User verified successfully");
        navigate("/login");
      },
      onError: (data) => {
        console.log(data);
      },
    });

  const onSubmit = ({ otp }: z.infer<typeof formSchema>) => {
    console.log(otp);
    verificationMutate({ otp, email: verificationEmail });
  };
  return (
    <div className="min-h-[100vh] bg-[#E2F4EA] font-inter">
      <main className="w-[100vw] px-6 max-w-[800px] mx-auto pt-20">
        <img src={logo} className="w-[60%] mx-auto mb-20 mt-12" />
        <h1 className="text-3xl text-center text-[#319a64] mb-8">
          Verify Your Account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[80%] mx-auto space-y-8 mb-12"
        >
          {/* <CustomInput
            label="Email"
            type="email"
            placeholder="janedoe@gmail.com"
            error={errors.email?.message?.toString()}
            {...register("email")}
          /> */}
          <PasswordInput
            label="OTP"
            placeholder="******"
            error={errors.otp?.message?.toString()}
            {...register("otp")}
          />
          <div>
            <p className="mb-2">
              Already verified?{" "}
              <Link to="/login" className="text-[#319A64]">
                Log In
              </Link>
            </p>
            <button className="bg-[#319A64] border-[#319A64] px-3 py-[16px] border-2 font-inter rounded-xl text-lg text-white block w-full">
              {isVerificationPending ? (
                <Loader className="mx-auto" />
              ) : (
                "Verify"
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
