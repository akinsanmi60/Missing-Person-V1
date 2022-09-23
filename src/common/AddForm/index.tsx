/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from "react";
import { Input, Select, Spinner, useDisclosure } from "@chakra-ui/react";
import FormField from "common/FormField";
import FormAddBox, { ButtonStyled } from "./style";
import {
  bodyType,
  FormPageProp,
  hairType,
  skinColor,
  foundInputValue,
} from "./type";
import PaymentModal from "./component";
import AuthContext from "contexts/AuthProvider";
import dataNig from "../../utils/states_and_lgas.json";
import { toast } from "react-toastify";
import toastOptions from "hooks/toast";
import { postRequest } from "utils/apiCall";
import { useMutation } from "@tanstack/react-query";
import { OTP_ROUTE } from "utils/Api-Routes";
import axios from "axios";

function AddFormPage({ formType, formData, register, setValue }: FormPageProp) {
  const { authUser } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [arrivedOTP, setArrivedOTP] = useState("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // conditions for button disable
  const btnCondition =
    !formData.poName &&
    !formData.poAd &&
    !formData.poName &&
    !formData.posterOTP;

  // LGA
  const stateLGA = dataNig.find(
    select =>
      select.state === formData.issueState ||
      formData.personSt ||
      formData.poState,
  );

  // sort dataNig
  const givenState = dataNig.sort((a, b) => (a.state > b.state ? 1 : -1));

  const onSubmitFile = async () => {
    setIsUploading(true);
    const inputFile = document.getElementById("fileInput") as HTMLInputElement;

    const formDataFile = new FormData();
    formDataFile.append("file", inputFile?.files?.item(0) as File);

    const res = await axios.post<{ url: string }>(
      `/media/upload`,
      formDataFile,
      {
        withCredentials: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    );

    setValue("imageA", res.data.url);
    setIsUploading(false);
  };

  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      setArrivedOTP(res?.allowOTPCode);
      console.log(res);
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const handleOTP = () => {
    const phoneEmail = formData.posterEmail;
    if (phoneEmail === "") {
      return toast.error("Please enter your registerd email", toastOptions);
    }
    mutate({ data: { phoneEmail: phoneEmail }, url: OTP_ROUTE });
  };

  return (
    <FormAddBox>
      <div className="formWrapper">
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
              <Input {...register("firstName")} />
            </FormField>
          </div>
          <div>
            <FormField label="Middle Name">
              <Input {...register("middleName")} />
            </FormField>
          </div>
          <div>
            <FormField label="Last Name">
              <Input {...register("lastName")} />
            </FormField>
          </div>
        </div>
        <div className="personbox">
          <div>
            <FormField label="Gender">
              <Input {...register("gender")} />
            </FormField>
          </div>
          <div>
            <FormField label="Height">
              <Input {...register("height")} />
            </FormField>
          </div>
          <div>
            <FormField label="Weight">
              <Input {...register("weight")} />
            </FormField>
          </div>
        </div>
        <div className="dropbox">
          <div>
            <FormField label="Complexion">
              <Select placeholder="Please Select" {...register("skin")}>
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
              <Select placeholder="Please Select" {...register("hair")}>
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
              <Select placeholder="Please Select" {...register("body")}>
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
              <Input {...register("personAd")} />
            </FormField>
          </div>
        </div>
        <div className="person_st_box">
          <div>
            <FormField label="State">
              <Select placeholder="Select State" {...register("personSt")}>
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
                {...register("personLga")}
                disabled={!stateLGA}
              >
                {stateLGA &&
                  stateLGA.lgas
                    .sort((a, b) => (a > b ? 1 : -1))
                    .map(lga => (
                      <option value={lga.toLowerCase()} key={lga.toLowerCase()}>
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
              <Input {...register("father")} />
            </FormField>
          </div>
          <div>
            <FormField label="Mother's Name">
              <Input {...register("mother")} />
            </FormField>
          </div>
          <div>
            <FormField label="Sibling's Name">
              <Input {...register("sibling")} />
            </FormField>
          </div>
        </div>
        <div className="parent_ad_box">
          <div>
            <FormField label="Parent Address">
              <Input {...register("parentAd")} />
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
                <Input type="date" {...register("issueDate")} />
              </FormField>
            </div>
            <div>
              <FormField label="State">
                <Select placeholder="Select State" {...register("issueState")}>
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
              <Input {...register("poName")} />
            </FormField>
          </div>
          <div>
            <FormField label="State of Police Station">
              <Select placeholder="Select State" {...register("poState")}>
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
                {...register("poLga")}
                disabled={!stateLGA}
              >
                {stateLGA &&
                  stateLGA.lgas
                    .sort((a, b) => (a > b ? 1 : -1))
                    .map(lga => (
                      <option value={lga.toLowerCase()} key={lga.toLowerCase()}>
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
              <Input {...register("poAd")} />
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
              <Input {...register("poNumber")} />
            </FormField>
          </div>
          <div>
            <FormField label="Station's Phone Number">
              <Input {...register("stationNumber")} />
            </FormField>
          </div>
        </div>
        <div className="police_ad_box">
          <div>
            <FormField label="Date Reported">
              <Input {...register("dateReport")} />
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
                {...register("posterFirstName")}
                value={authUser?.user.firstName}
                readOnly
              />
            </FormField>
          </div>
          <div>
            <FormField label="Last Name">
              <Input
                {...register("posterLastName")}
                value={authUser?.user.lastName}
                readOnly
              />
            </FormField>
          </div>
          <div>
            <FormField label="Relationship">
              <Input {...register("posterRelationship")} />
            </FormField>
          </div>
        </div>
        <div className="boxname">
          <div>
            <FormField label="E-mail">
              <Input
                {...register("posterEmail", { required: true })}
                value={authUser?.user.email}
                readOnly
              />
            </FormField>
          </div>
          <div>
            <FormField label="OTP Number">
              <Input
                {...register("posterOTP", { required: true })}
                // value={arrivedOTP}
              />
            </FormField>
          </div>
          <div>
            <button type="submit" className="btn-otp" onClick={handleOTP}>
              {isLoading ? "Sending.." : "Send OTP"}
            </button>
            <span className="numbaOTP">
              {isLoading ? <Spinner size="sm" /> : `${arrivedOTP}`}
            </span>
          </div>
        </div>

        <div className="img">
          <div>
            <FormField label="Image">
              <Input id="fileInput" type="file" onChange={onSubmitFile} />
            </FormField>
          </div>
          <div>
            <Input type="hidden" {...register("imageA")} />
          </div>
        </div>
        {isUploading ? "Uploading" : null}

        {/**Payment*/}
        <div className="payment">
          {formType === "missing" ? (
            <p>
              Kindly make payment to enable submission of form.
              <span
                onClick={() => {
                  onOpen();
                }}
              >
                Click to make payment.
              </span>{" "}
              The OTP button won't be clickable once you've otp generated except
              the page is refreshed then it becomes clickable.
            </p>
          ) : formType === "found" ? (
            <p className="warningotp">
              The OTP button won't be clickable once you've otp generated except
              the page is refreshed then it becomes clickable.
            </p>
          ) : null}
        </div>

        {/**Button*/}
        <div className="btn">
          {formType === "missing" ? (
            <ButtonStyled
              disabled={
                btnCondition || authUser?.transaction?.status !== "success"
              }
            >
              Submit
            </ButtonStyled>
          ) : (
            <ButtonStyled disabled={btnCondition}>Submit</ButtonStyled>
          )}
        </div>
        <PaymentModal onClose={onClose} isOpen={isOpen} />
      </div>
    </FormAddBox>
  );
}

export default AddFormPage;
