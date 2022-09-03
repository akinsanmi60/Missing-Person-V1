import React from "react";
import { Input, Select } from "@chakra-ui/react";
import FormField from "common/FormField";
import { SubmitHandler, useForm } from "react-hook-form";
import FormAddBox, { ButtonStyled } from "./style";
import { bodyType, hairType, skinColor } from "./type";

type FasProp = {
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  height: string;
  weight: string;
  skin: string;
  hair: string;
  body: string;
  personAd: string;
  personSt: string;
  personLga: string;
  father: string;
  mother: string;
  sibling: string;
  parentAd: string;
  state: string;
  lga: string;
  issueAd: string;
  poName: string;
  poState: string;
  poLga: string;
  poAd: string;
};

type FormPageProp = {
  formType: string;
  setData: React.Dispatch<React.SetStateAction<FasProp>>;
};

function AddFormPage({ formType, setData }: FormPageProp) {
  const { register, handleSubmit } = useForm<FasProp>();

  const onSubmit: SubmitHandler<FasProp> = data => {
    console.log(data);
    setData(data);
  };
  return (
    <FormAddBox>
      <div className="formWrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="boxname">
            <div>
              <FormField label="First Name">
                <Input {...register("firstName", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="Middle Name">
                <Input {...register("middleName", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="Last Name">
                <Input {...register("lastName", { required: true })} />
              </FormField>
            </div>
          </div>
          <div className="personbox">
            <div>
              <FormField label="Gender">
                <Input {...register("gender", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="Height">
                <Input {...register("height", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="Weight">
                <Input {...register("weight", { required: true })} />
              </FormField>
            </div>
          </div>
          <div className="dropbox">
            <div>
              <FormField label="Complexion">
                <Select
                  placeholder="Please Select"
                  {...register("skin", { required: true })}
                >
                  {skinColor.map(color => (
                    <option value={color} key={color}>
                      {color}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>
            <div>
              <FormField label="Hair">
                <Select
                  placeholder="Please Select"
                  {...register("hair", { required: true })}
                >
                  {hairType.map(ht => (
                    <option value={ht} key={ht}>
                      {ht}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>
            <div>
              <FormField label="Build">
                <Select
                  placeholder="Please Select"
                  {...register("body", { required: true })}
                >
                  {bodyType.map(gh => (
                    <option value={gh} key={gh}>
                      {gh}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>
          </div>
          <div className="person_ad_box">
            <div>
              <FormField label="Person Address">
                <Input {...register("personAd", { required: true })} />
              </FormField>
            </div>
          </div>
          <div className="person_st_box">
            <div>
              <FormField label="State">
                <Input {...register("personSt", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="Local Government">
                <Input {...register("personLga", { required: true })} />
              </FormField>
            </div>
          </div>
          <div className="parentbox">
            <div>
              <FormField label="Father's Name">
                <Input {...register("father", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="Mother's Name">
                <Input {...register("mother", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="Sibling's Name">
                <Input {...register("sibling", { required: true })} />
              </FormField>
            </div>
          </div>
          <div className="parent_ad_box">
            <div>
              <FormField label="Parent Address">
                <Input {...register("parentAd", { required: true })} />
              </FormField>
            </div>
          </div>

          <div>
            {formType === "found" ? (
              <p>Found Details</p>
            ) : formType === "missing" ? (
              <p>Missing Details</p>
            ) : null}

            <div className="issue_ad">
              <div>
                <FormField label="Date">
                  <Input
                    type="date"
                    {...register("state", { required: true })}
                  />
                </FormField>
              </div>
              <div>
                <FormField label="State">
                  <Input {...register("state", { required: true })} />
                </FormField>
              </div>
              <div>
                <FormField label="Local Government">
                  <Input {...register("lga", { required: true })} />
                </FormField>
              </div>
            </div>
            <div className="parent_ad_box">
              <div>
                <FormField label="Address">
                  <Input {...register("issueAd", { required: true })} />
                </FormField>
              </div>
            </div>
          </div>
          <div>
            <p>Police Officer-in-charge</p>
          </div>
          <div className="policebox">
            <div>
              <FormField label="Police Officer Name">
                <Input {...register("poName", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="State of Police Station">
                <Input {...register("poState", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="LGA of Police Station">
                <Input {...register("poLga", { required: true })} />
              </FormField>
            </div>
          </div>
          <div className="police_ad_box">
            <div>
              <FormField label="Parent Address">
                <Input {...register("poAd", { required: true })} />
              </FormField>
            </div>
          </div>
          <div className="btn">
            <ButtonStyled>Submit</ButtonStyled>
          </div>
        </form>
      </div>
    </FormAddBox>
  );
}

export default AddFormPage;
