import React from "react";
import { Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormField from "common/FormField";
import { SearchPprop, schema, FormDataProp } from "./type";

// type FormData = {
//   firstName: string;
//   lastName: string;
//   age: string;
//   gender: string;
//   state: string;
//   lga: string;
// };

// type SearchPprop = {
//   submit: (data: any) => Promise<void>;
// };

// const schema = yup
//   .object({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     age: yup.string().required(),
//     gender: yup.string().required(),
//     state: yup.string().required(),
//     lga: yup.string().required(),
//   })
//   .required();

function SearchBar({ submit }: SearchPprop) {
  const { register, handleSubmit } = useForm<FormDataProp>({
    resolver: yupResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <FormField label="First Name">
          <Input {...register("firstName")} />
        </FormField>
      </div>
      <div>
        <FormField label="Last Name">
          <Input {...register("lastName")} />
        </FormField>
      </div>
      <div>
        <FormField label="Gender">
          <Input {...register("gender")} />
        </FormField>
      </div>
      <div>
        <FormField label="Age">
          <Input {...register("age")} />
        </FormField>
      </div>
      <div>
        <FormField label="State">
          <Input {...register("state")} />
        </FormField>
      </div>
      <div>
        <FormField label="LGA">
          <Input {...register("lga")} />
        </FormField>
      </div>
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
