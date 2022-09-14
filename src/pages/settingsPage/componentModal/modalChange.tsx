/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { useContext } from "react";
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import toastOptions from "hooks/toast";
import { patchRequest } from "utils/apiCall";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CHANGE_PASSWORD } from "utils/Api-Routes";
import FormField from "common/FormField";
import { ModalWrapper } from "../styled";
import { useMutation } from "@tanstack/react-query";
import AuthContext from "contexts/AuthProvider";

type ChangeProps = {
  isOpen: boolean;
  onClose: () => void;
};
interface PasswordFormInputs {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    oldPassword: yup.string().min(5).max(20).required(),
    newPassword: yup.string().min(5).max(20).required(),
  })
  .required();

function ChangePasswordModal({ isOpen, onClose }: ChangeProps) {
  const { authUser } = useContext(AuthContext);
  const _id = authUser?.user._id;

  const { register, handleSubmit } = useForm<PasswordFormInputs>({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate } = useMutation(patchRequest, {
    onSuccess(res) {
      toast.success(res?.message, toastOptions);
      onClose();
    },
    onError(err: any) {
      toast.error(err?.message, toastOptions);
      onClose();
    },
  });
  // eslint-disable-next-line consistent-return
  const passwordSubmit = (valueInput: any) => {
    const payload = {
      ...valueInput,
      _id,
    };
    if (valueInput.newPassword !== valueInput.confirmPassword) {
      return toast.error("passwords do not match", toastOptions);
    }
    mutate({ data: payload, url: CHANGE_PASSWORD });
  };

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      size="md"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <ModalWrapper>
            <h1 style={{ marginBottom: 10 }}>Change Password?</h1>
            <form onSubmit={handleSubmit(passwordSubmit)}>
              <div style={{ marginBottom: 40 }}>
                <FormField label="Old Password">
                  <Input
                    {...register("oldPassword")}
                    type="text"
                    required
                    outline="none"
                  />
                </FormField>
              </div>
              <div className="inputbox">
                <FormField label="New Password">
                  <Input
                    {...register("newPassword")}
                    type="text"
                    required
                    outline="none"
                    style={{ marginBottom: 12 }}
                  />
                </FormField>
              </div>
              <div className="inputbox">
                <FormField label="Confirm Password">
                  <Input
                    {...register("confirmPassword")}
                    type="text"
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

export default ChangePasswordModal;
