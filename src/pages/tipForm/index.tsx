import React, { useEffect } from "react";
import FormField from "common/FormField";
import { useForm } from "react-hook-form";
import dataNig from "../../utils/states_and_lgas.json";
import {
  Input,
  Select,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import TipWrapper, { ButtonStyled, TextArea } from "./style";
import {
  availableNews,
  empoly,
  foundInputValue,
  gender,
  TipProps,
} from "./type";
import { toast } from "react-toastify";
import toastOptions from "hooks/toast";
import { postRequest } from "utils/apiCall";
import { useMutation } from "@tanstack/react-query";
import { TIP_ROUTE } from "utils/Api-Routes";
import NewsIndex from "common/NewsIndex";

function TipFormPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, watch, reset } = useForm<TipProps>();
  const formData = watch();

  useEffect(() => {
    onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // LGA
  const stateLGA = dataNig.find(
    select => select.state === formData.state || formData.policeState,
  );

  // sort dataNig
  const givenState = dataNig.sort((a, b) => (a.state > b.state ? 1 : -1));

  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      console.log(res);
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const submit = (inputValue: TipProps) => {
    console.log(inputValue);
    mutate({ data: inputValue, url: TIP_ROUTE });
    reset();
  };

  return (
    <TipWrapper>
      <NewsIndex availableNews={availableNews} />
      <div className="container">
        <form onSubmit={handleSubmit(submit)}>
          <div className="boxA">
            <h1>Informant's Details</h1>
            <div className="fullname">
              <div>
                <FormField label="First Name">
                  <Input type="text" {...register("firstName")} />
                </FormField>
              </div>
              <div>
                <FormField label="Last Name">
                  <Input type="text" {...register("lastName")} />
                </FormField>
              </div>
            </div>
            <div className="bio">
              <div>
                <FormField label="Gender">
                  <Select placeholder="Please Select" {...register("gender")}>
                    {gender.map(item => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>

              <div>
                <FormField label="Age">
                  <Input type="text" {...register("age")} min="15" max="60" />
                </FormField>
              </div>

              <div>
                <FormField label="Employment">
                  <Select
                    placeholder="Please Select"
                    {...register("employment")}
                  >
                    {empoly.map(item => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>
            </div>
            <div className="mediacontact">
              <div>
                <FormField label="Email">
                  <Input type="text" {...register("email")} />
                </FormField>
              </div>
              <div>
                <FormField label="Contact Number">
                  <Input
                    type="text"
                    {...register("phoneNumber")}
                    placeholder="08166998877"
                  />
                </FormField>
              </div>
            </div>
            <div className="address-A">
              <div>
                <FormField label="Address">
                  <Input type="text" {...register("address")} />
                </FormField>
              </div>
            </div>
            <div className="mediacontact">
              <div>
                <FormField label="State">
                  <Select placeholder="Select State" {...register("state")}>
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
          </div>
          <div className="boxB">
            <h1>Information Details</h1>
            <div className="polbox">
              <div className="person_type">
                <FormField label="Found Person Type">
                  <Select
                    placeholder="Please Select"
                    {...register("tipType", { required: true })}
                  >
                    {foundInputValue.map(inputValue => (
                      <option value={inputValue} key={inputValue}>
                        {inputValue}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>
              <div>
                <FormField label="Tip Date">
                  <Input type="date" {...register("tipDate")} />
                </FormField>
              </div>
              <div>
                <FormField label="Tip Time">
                  <Input type="time" {...register("tipTime")} />
                </FormField>
              </div>
            </div>
            <div className="address-A">
              <div>
                <FormField label="Nearby Police-Station Name">
                  <Input type="text" {...register("policeStation")} />
                </FormField>
              </div>
            </div>
            <div className="address-A">
              <div>
                <FormField label="Address">
                  <Input type="text" {...register("policeAdd")} />
                </FormField>
              </div>
            </div>
            <div className="mediacontact">
              <div>
                <FormField label="State">
                  <Select
                    placeholder="Select State"
                    {...register("policeState")}
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
                    {...register("policeLga", { required: true })}
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
            <div className="area">
              <FormField label="Tip Details">
                <TextArea {...register("tipContent")} maxLength={1000} />
              </FormField>
            </div>
            <div className="feedbtn">
              <ButtonStyled type="submit">
                {isLoading ? "Sending..." : "Send"}
              </ButtonStyled>
              <span>{isLoading ? <Spinner size="sm" /> : null}</span>
            </div>
          </div>
        </form>
      </div>
      <>
        <Modal
          blockScrollOnMount={false}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center" mb={-5} color="#0E2038">
              Rules of Engagment
            </ModalHeader>
            <ModalCloseButton outline="none" />
            <ModalBody>
              {Object.values(availableNews).map((item, i) => (
                <div key={i.toString()}>
                  <Text
                    fontSize="md"
                    mt={3}
                    color="#0E2038"
                    textAlign="justify"
                  >
                    👉{item}
                  </Text>
                </div>
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </TipWrapper>
  );
}

export default TipFormPage;
