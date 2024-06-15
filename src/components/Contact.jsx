import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/nbvvgdjb", userInfo);
      toast.success("Message has been Sent");
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div
      className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20"
      name="Contact"
    >
      <div className="bg-gray-100 shadow-lg rounded-lg p-8 md:w-1/2 mx-auto">
        <div>
          <h1 className="font-bold text-3xl">Contact Me</h1>
          <p className="mt-2">Please fill out the form below to contact me</p>
        </div>
        <div className="mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/nbvvgdjb"
            // method="post"
          >
            <div className="flex flex-col mb-4">
              <label htmlFor="fullname" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                {...register("fullname", { required: true })}
                type="text"
                id="fullname"
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="fullname"
              />
              {errors.fullname && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                name="message"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <div>
              <button
                type="submit"
                className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
      <hr className="mt-8" />
    </div>
  );
}

export default Contact;
