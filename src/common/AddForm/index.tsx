/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from "react";
import { Input, Select, useDisclosure } from "@chakra-ui/react";
import FormField from "common/FormField";
import { SubmitHandler, useForm } from "react-hook-form";
import FormAddBox, { ButtonStyled } from "./style";
import { bodyType, FasProp, FormPageProp, hairType, skinColor } from "./type";
import PaymentModal from "./component";
import AuthContext from "contexts/AuthProvider";

function AddFormPage({ formType, setData }: FormPageProp) {
  const { authUser } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                    {...register("date", { required: true })}
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
              <FormField label="Police Station Address">
                <Input {...register("poAd", { required: true })} />
              </FormField>
            </div>
          </div>
          {formType === "missing" ? (
            <div className="payment">
              <p>
                Kindly make payment to enable submission of form.{" "}
                <span
                  onClick={() => {
                    onOpen();
                  }}
                >
                  Click to make payment
                </span>
              </p>
            </div>
          ) : null}

          <div className="btn">
            {formType === "missing" ? (
              <ButtonStyled
                disabled={
                  authUser?.transaction?.status !== "success" ? true : false
                }
              >
                Submit
              </ButtonStyled>
            ) : (
              <ButtonStyled>Submit</ButtonStyled>
            )}
          </div>
        </form>
        <PaymentModal onClose={onClose} isOpen={isOpen} />
      </div>
    </FormAddBox>
  );
}

export default AddFormPage;
