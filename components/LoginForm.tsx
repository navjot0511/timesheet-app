"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  const router = useRouter();

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Submit handler
  const handleSubmit = async (values: { email: string; password: string }) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (result?.error) {
      alert("Invalid credentials");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-8 bg-white">
        <h1 className="mb-6 text-xl font-bold text-body">Welcome back</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-sans font-medium text-sm leading-relaxed tracking-normal text-body"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1C64F2]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 font-sans font-medium text-sm leading-relaxed tracking-normal text-body"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1C64F2]"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <label className="flex items-center text-sm font-sans font-medium leading-none tracking-normal align-middle text-body">
                <input type="checkbox" className="mr-2 accent-brandBlue" />
                Remember me
              </label>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-2 rounded text-white bg-[#1A56DB] hover:bg-[#1C64F2] transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 md:px-12 py-8 bg-[#1C64F2] text-white flex-1">
        <div>
          <h2 className="text-3xl font-bold mb-4">ticktock</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Introducing ticktock, our cutting-edge timesheet web application
            designed to revolutionize how you manage employee work hours. With
            ticktock, you can effortlessly track and monitor employee attendance
            and productivity from anywhere, anytime, using any
            internet-connected device.
          </p>
        </div>
      </div>
    </div>
  );
}
