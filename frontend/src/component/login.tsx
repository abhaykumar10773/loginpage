import React, { useState } from "react";
import '../index.css';
import {loginUserApi} from "../Api/loginApi.js"
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const loginSchema = z.object({
  id: z.string().min(1, "ID is required"),
  password: z.string().min(1, "Password is required"),
});

const LoginPage = () => {
  
  const {
    register,
    handleSubmit,
     formState: { errors }} = useForm({
    resolver: zodResolver(loginSchema),
  });

  
  const onSubmit = async(data) => {
    try {
      const response = await loginUserApi({
        id:parseInt(data.id),
        password:data.password,
      });

      console.log("LOGIN DATA IS",response.data); // Handle the response as needed
      alert("Login successful!");
    } catch (error) {
      if ((error as any).response && (error as any).response.status === 401) {
        alert("password is incorrect. Please enter correct password.");
      }else if((error as any).response && (error as any).response.status === 404){
        alert("User not found. Please check your ID.");
      }else{
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="box">
        <h2 className="heading">Welcome back!</h2>
        <input
          type="text"
          placeholder="UID"
          {...register("id")}
        />
         {errors.id && <p style={{ color: "red" }}>{errors.id.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
          {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
