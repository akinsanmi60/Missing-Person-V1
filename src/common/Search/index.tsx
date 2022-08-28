import React from "react";
import { Input } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormField from "common/FormField";
import { SearchPprop, schema, FormDataProp } from "./type";
import SearchBox, { ButtonStyled, inputStyles } from "./style";
import { FaSearch } from "react-icons/fa";

function SearchBar({ view }: SearchPprop) {
  const { register, handleSubmit } = useForm<FormDataProp>({
    resolver: yupResolver(schema),
  });
  const submit = async (data: FormDataProp) => {
    console.log(data);
  };
  return (
    <SearchBox>
      <form onSubmit={handleSubmit(submit)}>
        <div className="box">
          <h1>Search for {view}</h1>
          <div className="boxA">
            <div>
              <FormField label="First Name">
                <Input sx={inputStyles} {...register("firstName")} />
              </FormField>
            </div>
            <div>
              <FormField label="Last Name">
                <Input sx={inputStyles} {...register("lastName")} />
              </FormField>
            </div>
            <div>
              <FormField label="Age">
                <Input sx={inputStyles} {...register("age")} />
              </FormField>
            </div>
          </div>
          <div className="boxB">
            <div>
              <FormField label="Gender">
                <Input sx={inputStyles} {...register("gender")} />
              </FormField>
            </div>
            <div>
              <FormField label="State">
                <Input sx={inputStyles} {...register("state")} />
              </FormField>
            </div>
            <div>
              <FormField label="LGA">
                <Input sx={inputStyles} {...register("lga")} />
              </FormField>
            </div>
          </div>
          <div className="btnbox">
            <ButtonStyled>
              <p className="text">
                <FaSearch className="icon" /> Search
              </p>
            </ButtonStyled>
          </div>
        </div>
      </form>
    </SearchBox>
  );
}

export default SearchBar;
