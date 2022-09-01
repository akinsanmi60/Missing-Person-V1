/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Input, Select } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormField from "common/FormField";
import { SearchPprop, schema, FormDataProp } from "./type";
import SearchBox, { ButtonStyled, inputStyles } from "./style";
import { FaSearch } from "react-icons/fa";
import { Spinner } from "@chakra-ui/react";

function SearchBar({ view, people, setData }: SearchPprop) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<FormDataProp>({
    resolver: yupResolver(schema),
  });

  // age calculation for dropdown
  const getAge = people.map(person => person.age);
  const filterAge = getAge
    .filter(function (age, index) {
      return getAge.indexOf(age) === index;
    })
    .sort(function (a, b) {
      return Number(a) - Number(b);
    });

  const submit = async (data: FormDataProp) => {
    console.log(data);
    setLoading(true);
    const lowerCaseFirstname = data?.firstName.toLowerCase();
    const lowerCaseLastname = data?.lastName.toLowerCase();
    const lowerCaseGender = data?.gender.toLowerCase();
    const lowerCaseAge = data?.age.toLowerCase();

    const fiteredPerson = people?.filter(person =>
      Object.values(person)
        .toString()
        .toLowerCase()
        .includes(
          lowerCaseFirstname &&
            lowerCaseLastname &&
            lowerCaseGender &&
            lowerCaseAge,
        ),
    );

    setData(fiteredPerson);
    setLoading(false);
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
                <Select placeholder="Please Select Age" {...register("age")}>
                  {filterAge.map(yearAge => (
                    <option value={yearAge} key={yearAge}>
                      {yearAge}
                    </option>
                  ))}
                </Select>
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
              {loading ? (
                <Spinner />
              ) : (
                <p className="text">
                  <FaSearch className="icon" /> Search
                </p>
              )}
            </ButtonStyled>
          </div>
        </div>
      </form>
    </SearchBox>
  );
}

export default SearchBar;
