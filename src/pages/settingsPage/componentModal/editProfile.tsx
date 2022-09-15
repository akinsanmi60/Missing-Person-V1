/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from "react";
import { Input, Select, Spinner } from "@chakra-ui/react";
import FormField from "common/FormField";
import dataNig from "../../../utils/states_and_lgas.json";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonStyled } from "../styled";
import AuthContext from "contexts/AuthProvider";
import { UPDATE_USER } from "utils/Api-Routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchRequest } from "utils/apiCall";
import { toast } from "react-toastify";
import toastOptions from "hooks/toast";
import { queryKeys } from "utils/queryKey";

type EditProp = {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

interface EditFormInputs {
  gender: string;
  phoneNumber: string;
  state: string;
  lga: string;
  address: string;
}

const schema = yup
  .object({
    gender: yup.string().required(),
    state: yup.string().required(),
    lga: yup.string().required(),
    phoneNumber: yup.string().required(),
    address: yup.string().required(),
  })
  .required();

function EditProfile({ setEditMode }: EditProp) {
  const { authUser } = useContext(AuthContext);
  const { register, handleSubmit, watch } = useForm<EditFormInputs>({
    resolver: yupResolver(schema),
  });
  const queryClient = useQueryClient();

  const formData = watch();
  const fullName = `${authUser?.user.lastName} - ${authUser?.user.firstName}`;
  const _id = authUser?.user._id;

  // LGA
  const stateLGA = dataNig.find(s => s.state === formData.state);
  // sort dataNig
  const givenState = dataNig.sort((a, b) => (a.state > b.state ? 1 : -1));
  const genderSelect = ["Male", "Female"];

  const { isLoading, mutate } = useMutation(patchRequest, {
    onSuccess(res) {
      setEditMode(false);
      queryClient.invalidateQueries([queryKeys.getUserProfile]);
      toast.success(res?.message, toastOptions);
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });
  const formSubmit = (valueInput: any) => {
    const payload = {
      ...valueInput,
      _id,
    };

    mutate({ data: payload, url: UPDATE_USER });
  };

  return (
    <div>
      <div className="displaysetting">
        <div className="userdetail">
          <div className="headbox">
            <h1>Edit Profile</h1>
            <div className="actionBtn">
              <button onClick={() => setEditMode(false)} className="cancelbtn">
                Cancel
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="displayform">
              <div className="lays">
                <div>
                  <FormField label="Full Name">
                    <Input defaultValue={fullName} readOnly />
                  </FormField>
                </div>
                <div>
                  <FormField label="Gender">
                    <Select placeholder="Please Select" {...register("gender")}>
                      {genderSelect.map(gender => (
                        <option value={gender} key={gender}>
                          {gender}
                        </option>
                      ))}
                    </Select>
                  </FormField>
                </div>
              </div>
              <div className="lays">
                <div>
                  <FormField label="State">
                    <Select placeholder="Select State" {...register("state")}>
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
                  <FormField label="Local Government Area">
                    <Select
                      placeholder="Local govt area"
                      {...register("lga", { required: true })}
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
              <div className="lays">
                <div>
                  <FormField label="Phone Number">
                    <Input {...register("phoneNumber")} />
                  </FormField>
                </div>
                <div>
                  <FormField label="Address">
                    <Input {...register("address")} />
                  </FormField>
                </div>
              </div>
              <div className="savebtn">
                <ButtonStyled>{isLoading ? "Saving..." : "Save"}</ButtonStyled>
                <span>{isLoading ? <Spinner size="sm" /> : null}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
