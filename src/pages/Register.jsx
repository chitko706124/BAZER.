import { PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { useRegisterMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const [register] = useRegisterMutation();
  const nav = useNavigate();
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <form
          onSubmit={form.onSubmit(async (values) => {
            try {
              const data = await register(values);
              console.log(data);
              // if (data.data.success) nav("/login");
              if (data.error) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "The email has already been taken.",
                });
              } else {
                nav("/login");
              }
            } catch (error) {
              // console.log(error);
            }
          })}
          className=" w-96 flex flex-col gap-10 shadow-lg p-7"
        >
          <h1>Register</h1>
          <TextInput placeholder="Name" {...form.getInputProps("name")} />
          <TextInput
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            placeholder="create password"
            {...form.getInputProps("password")}
          />
          <PasswordInput
            placeholder="confirm password"
            {...form.getInputProps("password_confirmation")}
          />
          <button type="submit" className=" text-white bg-blue-600 py-1">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
