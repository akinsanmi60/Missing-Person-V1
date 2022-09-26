import React from "react";
import { Input, Select } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormField from "common/FormField";
import { SearchPprop, schema, FormDataProp } from "./type";
import SearchBox, { ButtonStyled, inputStyles } from "./style";
import { FaSearch } from "react-icons/fa";
import dataNig from "../../utils/states_and_lgas.json";

function SearchBar({ view, people, setData }: SearchPprop) {
  const { register, handleSubmit, watch, reset } = useForm<FormDataProp>({
    resolver: yupResolver(schema),
  });

  // the watch() is used to observe value change in state select
  const formData = watch();

  // LGA
  const stateLGA = dataNig.find(s => s.state === formData.personSt);

  // sort dataNig
  const givenState = dataNig.sort((a, b) => (a.state > b.state ? 1 : -1));

  // age calculation for dropdown
  const getAge = people.map(person => person.age);
  const filterAge = getAge
    .filter(function (age, index) {
      return getAge.indexOf(age) === index;
    })
    .sort((a, b) => Number(a) - Number(b));

  const submit = async (data: FormDataProp) => {
    const lowerCaseFirstname = data?.firstName.toLowerCase();
    const lowerCaseLastname = data?.lastName.toLowerCase();
    const lowerCaseGender = data?.gender.toLowerCase();
    const lowerCaseAge = data?.age.toLowerCase();

    const fiteredPerson = people?.filter(person =>
      Object.values(person)
        .toString()
        .toLowerCase()
        .includes(
          lowerCaseFirstname ||
            lowerCaseLastname ||
            lowerCaseGender ||
            lowerCaseAge,
        ),
    );

    setData(fiteredPerson);

    reset();
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
                <Select placeholder="Please Select" {...register("age")}>
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
                <Select placeholder="Select State" {...register("personSt")}>
                  {givenState
                    .map(({ state }) => (
                      <option value={state} key={state}>
                        {state}
                      </option>
                    ))
                    .sort()}
                </Select>
              </FormField>
            </div>
            <div>
              <FormField label="LGA">
                <Select
                  placeholder="Local govt area"
                  {...register("personLga", { required: true })}
                  disabled={!stateLGA}
                >
                  {stateLGA &&
                    stateLGA.lgas
                      .sort((a, b) => (a > b ? 1 : -1))
                      .map(lga => (
                        <option
                          value={lga.toLowerCase()}
                          key={lga.toLowerCase()}
                        >
                          {lga}
                        </option>
                      ))}
                </Select>
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
