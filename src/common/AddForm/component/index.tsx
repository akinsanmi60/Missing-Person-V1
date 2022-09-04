import React, { useContext, useState } from "react";
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import PaystackPop from "@paystack/inline-js";
import FormField from "common/FormField";
import { ModalWrapper } from "../style";
import toastOptions from "hooks/toast";
import { toast } from "react-toastify";
import AuthContext from "contexts/AuthProvider";
import { PropTran } from "../type";

type ChangeProps = {
  isOpen: boolean;
  onClose: () => void;
};

function PaymentModal({ isOpen, onClose }: ChangeProps) {
  const { authUser } = useContext(AuthContext);
  const [amount, setAmount] = useState("5000");

  const lastName = authUser?.user.lastName || "Akinsanmi";
  const firstName = authUser?.user.firstName || "Akintunde";
  const email = authUser?.user.email || "testmail@gamila.com";

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_fa5805e84c03c63dbe51460e8b6add4fca372aa6",
      amount: (amount as any) * 100,
      lastName,
      firstName,
      email,
      onSuccess(transaction: PropTran) {
        localStorage.setItem("transaction", JSON.stringify(transaction));
        toast.success(
          `Transaction Successful Ref ${transaction.reference}`,
          toastOptions,
        );
      },
      onCancel() {
        toast.error("Transaction Cancel", toastOptions);
      },
    });
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
            <h1 style={{ marginBottom: 10 }}>Make Payment</h1>
            <form onSubmit={submitForm}>
              <div>
                <FormField label="First Name">
                  <Input
                    type="text"
                    value={firstName}
                    readOnly
                    outline="none"
                  />
                </FormField>
              </div>
              <div className="inputbox">
                <FormField label="Last Name">
                  <Input type="text" value={lastName} readOnly outline="none" />
                </FormField>
              </div>
              <div className="inputbox">
                <FormField label="Email">
                  <Input type="text" value={email} outline="none" readOnly />
                </FormField>
              </div>
              <div className="inputbox">
                <FormField label="Amount">
                  <Input
                    type="text"
                    required
                    onChange={e => setAmount(e.target.value)}
                    outline="none"
                  />
                </FormField>
              </div>

              <div className="btn">
                <button type="submit" className="reset_btn">
                  Pay
                </button>
              </div>
            </form>
          </ModalWrapper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PaymentModal;
