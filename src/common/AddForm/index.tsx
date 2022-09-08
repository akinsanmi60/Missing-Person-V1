/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from "react";
import { Input, Select, useDisclosure } from "@chakra-ui/react";
import FormField from "common/FormField";
import { SubmitHandler, useForm } from "react-hook-form";
import FormAddBox, { ButtonStyled } from "./style";
import {
  bodyType,
  FasProp,
  FormPageProp,
  hairType,
  skinColor,
  foundInputValue,
} from "./type";
import PaymentModal from "./component";
import AuthContext from "contexts/AuthProvider";
import dataNig from "../../utils/states_and_lgas.json";

function AddFormPage({ formType, setData }: FormPageProp) {
  const { authUser } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch } = useForm<FasProp>();

  // the watch() is used to observe value change in state select
  const formData = watch();

  // conditions for button disable
  const btnCondition =
    !formData.poName &&
    !formData.poAd &&
    !formData.poName &&
    !formData.posterOTP;

  // LGA
  const stateLGA = dataNig.find(
    s =>
      s.state === formData.issueState || formData.personSt || formData.poState,
  );

  // sort dataNig
  const givenState = dataNig.sort((a, b) => (a.state > b.state ? 1 : -1));

  const onSubmit: SubmitHandler<FasProp> = data => {
    console.log(data);
    setData(data);
  };

  return (
    <FormAddBox>
      <div className="formWrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/**Payment*/}
          {formType === "found" ? (
            <div className="person_type">
              <FormField label="Found Person Type">
                <Select
                  placeholder="Please Select"
                  {...register("foundPersonType", { required: true })}
                >
                  {foundInputValue.map(inputValue => (
                    <option value={inputValue} key={inputValue}>
                      {inputValue}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>
          ) : null}

          {/**Victim Bio */}
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

          {/**Victim Address */}
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
                <Select
                  placeholder="Select State"
                  {...register("personSt", { required: true })}
                >
                  {givenState.map(({ state }) => (
                    <option value={state} key={state}>
                      {state}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>
            <div>
              <FormField label="Local Government">
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

          {/**Missing or Found Details */}
          <div>
            {formType === "found" ? (
              <h1>Found Details</h1>
            ) : formType === "missing" ? (
              <h1>Missing Details</h1>
            ) : null}

            <div className="issue_ad">
              <div>
                <FormField label="Date">
                  <Input
                    type="date"
                    {...register("issueDate", { required: true })}
                  />
                </FormField>
              </div>
              <div>
                <FormField label="State">
                  <Select
                    placeholder="Select State"
                    {...register("issueState")}
                  >
                    {givenState.map(({ state }) => (
                      <option value={state} key={state}>
                        {state}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>
              <div>
                <FormField label="Local Government">
                  <Select
                    placeholder="Local govt area"
                    {...register("issueLga", { required: true })}
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
            <div className="parent_ad_box">
              <div>
                <FormField label="Address">
                  <Input {...register("issueAd", { required: true })} />
                </FormField>
              </div>
            </div>
          </div>

          {/**Police */}
          <div>
            <h1>Police Officer-in-charge</h1>
          </div>
          <div className="policebox">
            <div>
              <FormField label="Police Officer Full Name">
                <Input {...register("poName", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="State of Police Station">
                <Select
                  placeholder="Select State"
                  {...register("poState", { required: true })}
                >
                  {givenState.map(({ state }) => (
                    <option value={state} key={state}>
                      {state}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>
            <div>
              <FormField label="LGA of Police Station">
                <Select
                  placeholder="Local govt area"
                  {...register("poLga", { required: true })}
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
          <div className="police_ad_box">
            <div>
              <FormField label="Police Station Address">
                <Input {...register("poAd", { required: true })} />
              </FormField>
            </div>
          </div>
          <div className="police_nos">
            <div>
              <FormField label="Case Number">
                <Input {...register("caseNumber", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="Officer's Phone Number">
                <Input {...register("poNumber", { required: true })} />
              </FormField>
            </div>
            <div>
              <FormField label="Station's Phone Number">
                <Input {...register("stationNumber", { required: true })} />
              </FormField>
            </div>
          </div>
          <div className="police_ad_box">
            <div>
              <FormField label="Date Reported">
                <Input {...register("dateReport", { required: true })} />
              </FormField>
            </div>
          </div>

          {/**Posted By */}
          <div>
            <h1>Posted By</h1>
          </div>
          <div className="boxname">
            <div>
              <FormField label="First Name">
                <Input
                  {...register("posterFirstName", { required: true })}
                  value={authUser?.user.firstName || "Akinsanmi"}
                  readOnly
                />
              </FormField>
            </div>
            <div>
              <FormField label="Last Name">
                <Input
                  {...register("posterLastName", { required: true })}
                  value={authUser?.user.lastName || "Akintunde"}
                  readOnly
                />
              </FormField>
            </div>
            <div>
              <FormField label="Relationship">
                <Input
                  {...register("posterRelationship", { required: true })}
                />
              </FormField>
            </div>
          </div>
          <div className="boxname">
            <div>
              <FormField label="E-mail">
                <Input
                  {...register("posterNumber", { required: true })}
                  value={authUser?.user.email || "2348164279799"}
                />
              </FormField>
            </div>
            <div>
              <FormField label="OTP Number">
                <Input {...register("posterOTP", { required: true })} />
              </FormField>
            </div>
            <div>
              <Input type="submit" value="Send OTP" />
            </div>
          </div>

          {/**Payment*/}
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

          {/**Button*/}
          <div className="btn">
            {formType === "missing" ? (
              <ButtonStyled
                disabled={
                  authUser?.transaction?.status !== "success"
                    ? true
                    : false && btnCondition
                }
              >
                Submit
              </ButtonStyled>
            ) : (
              <ButtonStyled disabled={btnCondition}>Submit</ButtonStyled>
            )}
          </div>
        </form>
        <PaymentModal onClose={onClose} isOpen={isOpen} />
      </div>
    </FormAddBox>
  );
}

export default AddFormPage;
