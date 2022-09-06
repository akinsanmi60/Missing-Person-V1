import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalBody,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import toastOptions from "hooks/toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FORGET_PASSWORD } from "utils/Api-Routes";
import { useMutation } from "@tanstack/react-query";
import { postRequest } from "utils/apiCall";
import { ModalWrapper } from "./style";
import FormField from "common/FormField";

type ResetProps = {
  isOpen: boolean;
  onClose: () => void;
  overlay: JSX.Element;
};

interface ResetFormInputs {
  email: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
  })
  .required();

function ResetPasswordModal({ isOpen, onClose, overlay }: ResetProps) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ResetFormInputs>({
    resolver: yupResolver(schema),
  });

  const { mutate, isLoading } = useMutation(postRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      navigate("/reset_password");
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
    },
  });

  const resetSubmit = (valueInput: any) => {
    mutate({ data: valueInput, url: FORGET_PASSWORD });
    onClose();
  };

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      size="md"
      motionPreset="slideInBottom"
    >
      {overlay}
      <ModalContent>
        <ModalBody>
          <ModalWrapper>
            <h1>Forgot your password?</h1>
            <p>
              It happens to the best of us. The good news is you can change it
              right now by entering your registered email.
            </p>
            <form onSubmit={handleSubmit(resetSubmit)}>
              <div className="inputbox">
                <FormField>
                  <Input
                    {...register("email")}
                    type="email"
                    required
                    outline="none"
                  />
                </FormField>
              </div>

              <div className="btn">
                <button type="submit" className="reset_btn">
                  {isLoading ? <Spinner size="sm" /> : "Send"}
                </button>
              </div>
            </form>
          </ModalWrapper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ResetPasswordModal;
