import {
  CustomInput,
  PasswordInput,
  RadioInput,
} from "src/components/shared/input";
import logo from "./../assets/svg/logo.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MutationKeys } from "src/utils/mutation-keys";
import { registerUser } from "src/api/api";
import { CreateUserType } from "src/utils/types/api-types";
import { Loader } from "src/components/shared/loader";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext, UserContextType } from "src/context/user.context";

const genders = ["Male", "Female"] as const;

const formSchema = z
  .object({
    firstName: z.string().min(3, "First Name must be at least 3 characters"),
    lastName: z.string().min(3, "Last Name must be at least 3 characters"),
    phoneNumber: z
      .string()
      .min(11, "Phone number must be 11 characters")
      .max(11, "Phone number must be 11 characters"),
    gender: z.string().min(1, "Gender has not been selected"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
    email: z.string().email("Email entered is invalid"),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      gender: "",
      phoneNumber: "",
    },
  });
  const { setVerificationEmail } = useContext(UserContext) as UserContextType;

  const navigate = useNavigate();

  const { isPending, mutate: createUserMutate } = useMutation({
    mutationKey: [MutationKeys.createUser],
    mutationFn: (data: CreateUserType) => registerUser(data),
    onSuccess: (data) => {
      console.log(data);
      toast.success("User successfully created");
      setVerificationEmail(getValues("email"));
      navigate("/verify");
    },
    onError: (data) => {
      console.log(data);
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    createUserMutate({ ...data, role: "user" });
  };

  return (
    <div className="min-h-[100vh] bg-[#E2F4EA] flex justify-center items-center">
      <main className="w-[100vw] px-6 max-w-[800px] mx-auto">
        <img src={logo} className="w-[60%] mx-auto mb-20 mt-12" />
        <h1 className="text-3xl text-center font-inter text-[#319a64] mb-8">
          Register
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[80%] mx-auto space-y-4 mb-12"
          noValidate
        >
          <CustomInput
            label="Email"
            type="email"
            placeholder="janedoe@gmail.com"
            error={errors.email?.message?.toString()}
            {...register("email")}
          />
          <CustomInput
            label="First Name"
            placeholder="Jane"
            error={errors.firstName?.message?.toString()}
            {...register("firstName")}
          />
          <CustomInput
            label="Last Name"
            placeholder="Doe"
            error={errors.lastName?.message?.toString()}
            {...register("lastName")}
          />
          <div>
            <label className="font-inter font-semibold text-[16px] leading-[20px] mb-2 block">
              Gender
            </label>
            <div className="flex space-x-4">
              {genders.map((gender, idx) => (
                <div key={idx}>
                  <RadioInput
                    {...register("gender")}
                    label={gender}
                    value={gender}
                    // checked={gender == getValues("gender")}
                    // onChange={() => setValue("gender", gender)}
                  />
                </div>
              ))}
            </div>
            <p className="font-inter text-sm text-[#7A0323]">
              {errors.gender?.message?.toString()}
            </p>
          </div>
          <CustomInput
            label="Phone Number"
            placeholder="08091234567"
            error={errors.phoneNumber?.message?.toString()}
            {...register("phoneNumber")}
          />
          <PasswordInput
            label="Password"
            placeholder="********"
            error={errors.password?.message?.toString()}
            {...register("password")}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="********"
            error={errors.confirmPassword?.message?.toString()}
            {...register("confirmPassword")}
          />
          <div className="font-inter">
            <p className="mb-2">
              Already have an account?{" "}
              <Link to="/login" className="text-[#319A64]">
                Log in
              </Link>
            </p>
            <button className="bg-[#319A64] border-[#319A64] border-2 font-inter px-3 py-[16px] rounded-xl text-lg text-white block w-full">
              {isPending ? <Loader className="mx-auto" /> : "Sign up"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
