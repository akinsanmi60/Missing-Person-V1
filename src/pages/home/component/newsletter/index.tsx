import React from "react";
import FormField from "common/FormField";
import { SubmitHandler, useForm } from "react-hook-form";
import LetterWrapper from "./style";
import { Input } from "@chakra-ui/react";
import letterImg from "../../../../assets/Mailbox-bro.svg";

type FasProp = {
  example: string;
  exampleRequired: string;
};

function NewsLetterPage() {
  const { register, handleSubmit } = useForm<FasProp>();

  const onSubmit: SubmitHandler<FasProp> = data => console.log(data);

  return (
    <LetterWrapper>
      <div className="container">
        <div className="formbox">
          <h1>Sign-up for our newsletter</h1>
          <p>
            Enter your mail to receive the latest news and to learn about
            interesting events.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formfield">
              <FormField>
                <Input defaultValue="test" {...register("example")} />
              </FormField>

              <button type="submit" className="btn">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="imagebox">
          <img src={letterImg} alt="svg" />
        </div>
      </div>
    </LetterWrapper>
  );
}

export default NewsLetterPage;
