import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import HomeWrapper from "./style";

type FasProp = {
  example: string;
  exampleRequired: string;
};

function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FasProp>();
  const onSubmit: SubmitHandler<FasProp> = data => console.log(data);
  return (
    <HomeWrapper>
      HomePag e move
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </HomeWrapper>
  );
}

export default HomePage;
