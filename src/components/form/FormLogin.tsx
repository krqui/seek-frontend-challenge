"use client";
import {
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";
import MainInput from "../main/MainInput";
import { useUserDispatch } from "@/lib/hooks";
import { login } from "@/lib/features/user/userSlice";
import { useRouter } from "next/navigation";

export const FormLogin: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: true,
    password: true,
  });

  const dispatch = useUserDispatch();
  const router = useRouter();

  const handleEmailChange = (value: string) => {
    setForm((prev) => ({ ...prev, email: value }));
    if (value.length > 0) {
      setErrors({ ...errors, email: false });
    } else {
      setErrors({ ...errors, email: true });
    }
  };
  const handlePasswordChange = (value: string) => {
    setForm((prev) => ({ ...prev, password: value }));
    if (value.length > 0) {
      setErrors({ ...errors, password: false });
    } else {
      setErrors({ ...errors, password: true });
    }
  };

  const trigger = () => {
    return form.email.length > 0 && form.password.length > 0;
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const send = async (event: FormEvent) => {
    event.preventDefault();
    const valid = trigger();
    if (valid) {
      const result = await dispatch(
        login({ email: form.email, password: form.password })
      );
      if (login.fulfilled.match(result)) {
        alert("Login succesful");
        router.push("/dashboard");
      } else {
        alert("Login failed");
      }
    } else {
      alert("Please fill the fields to login");
    }
  };

  return (
    <form
      id="loginForm"
      className="w-[320px] md:w-[420px] rounded-[11px] border-[1.2px] border-solid border-primary-200 bg-primary-600 px-8 pb-[50px] pt-[30px]"
      onSubmit={send}
    >
      <p className="text-center text-[22px]">SeekyApp</p>
      <div className="mb-[50px] mt-12 flex flex-col gap-y-10">
        <div className="flex gap-x-5">
          <div className="pt-2.5">
            <EnvelopeIcon className="text-primary-400" />
          </div>

          <MainInput
            modelValue={form.email}
            name="login_email"
            type="email"
            onUpdateModelValue={handleEmailChange}
            placeholder="Email"
            error={errors.email}
            errorHelper={errors.email}
            errorMarginLeft={true}
            inputClass="bg-transparent border-t-0 border-x-0 border-b-[1.2px] rounded-none outline-none focus:border-primary-400 py-2 text-[18px] !pl-1"
            className="h-full"
          />
        </div>
        <div className="flex gap-x-5">
          <div className="pt-2.5">
            <LockClosedIcon className="text-primary-400" />
          </div>
          <MainInput
            modelValue={form.password}
            name="login_password"
            type={showPassword ? "text" : "password"}
            onUpdateModelValue={handlePasswordChange}
            placeholder="Password"
            error={errors.password}
            errorHelper={errors.password}
            errorMarginLeft={true}
            inputClass="bg-transparent border-t-0 border-x-0 border-b-[1.2px] rounded-none outline-none focus:border-primary-400 py-2 text-[18px] !pl-1"
            className="h-full"
            rightComponent={
              showPassword ? (
                <EyeIcon
                  className="mr-2 h-8 w-8 cursor-pointer text-primary-800"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <EyeSlashIcon
                  className="mr-2 h-8 w-8 cursor-pointer text-primary-800"
                  onClick={() => setShowPassword(true)}
                />
              )
            }
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="h-[42px] w-[170px] rounded-[5px] bg-primary-700 text-[18px] font-medium text-white">
          Login
        </button>
      </div>
    </form>
  );
};
