import { PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import Swal from "sweetalert2";
import { useLoginMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useDidUpdate } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/service/authSlice";

const Login = () => {
  const form = useForm({
    initialValues: {
      email: "gg1234@gmail.com",
      password: "111111111",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  const [login] = useLoginMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <form
          onSubmit={form.onSubmit(async (values) => {
            try {
              const { data } = await login(values);
              dispatch(addUser({ user: data?.user, token: data?.token }));
              if (data.success) nav("/");
            } catch (error) {
              console.log(error);
            }
          })}
          className=" w-96 flex flex-col gap-10 shadow-lg p-7"
        >
          <h1>Register</h1>

          <TextInput
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            placeholder="create password"
            {...form.getInputProps("password")}
          />

          <button type="submit" className=" text-white bg-blue-600 py-1">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
