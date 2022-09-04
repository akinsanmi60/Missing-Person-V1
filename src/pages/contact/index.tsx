import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContactWrapper, { ButtonStyled, IconBox, TextArea } from "./style";
import FormField from "../../common/FormField";
import { useNavigate } from "react-router-dom";
import {
  FaBuilding,
  FaFacebookSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

type FormData = {
  email: string;
  phone: string;
  name: string;
  subject: string;
  comment: string;
};

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const schema = yup
  .object({
    email: yup
      .string()
      .matches(EMAIL_REGEX, "Please enter a valid email address")
      .required(),
    phone: yup.string().required(),
    name: yup.string().required(),
    subject: yup.string().required(),
    comment: yup.string().required(),
  })
  .required();

function Contact() {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const submit = async (data: any) => {
    console.log(data);
  };

  return (
    <ContactWrapper>
      <div className="faq">
        <div className="faqtitle">
          <h1>How Can We Help?</h1>
          <p>
            Please search our extensive range of FAQ topics for answers. If you
            still can’t find the answer, please fill out the form below.
          </p>
        </div>
        <div className="feedbtn">
          <Box textAlign="center" marginTop={2}>
            <ButtonStyled onClick={() => navigate("/question")}>
              FAQs
            </ButtonStyled>
          </Box>
        </div>
      </div>
      <div className="boxcontact">
        <div className="sideA">
          <h1>Let's get in touch</h1>
          <p>
            We'love to hear from you. Our friendly team is always here to chat.
          </p>
          <div className="contact_icon">
            <div className="box_icon">
              <FaRegEnvelope className="Fa" />
              <p>Email us on: hello@humoni.com</p>
            </div>
            <div className="box_icon">
              <FaPhoneAlt className="Fa" />
              <p>Phone: +2348164279799</p>
            </div>
            <div className="box_icon">
              <FaBuilding className="Fa" />
              <p>
                Address: 9c, Environmental Crescent Unilag-Estate, Magodo, Lagos
                State
              </p>
            </div>
            <IconBox>
              <span>
                <FaFacebookSquare />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaWhatsappSquare />
              </span>
              <span>
                <FaTwitterSquare />
              </span>
            </IconBox>
          </div>
        </div>
        <div className="sideB">
          <form onSubmit={handleSubmit(submit)}>
            <h2>Get in touch</h2>
            <div className="covered">
              <div>
                <FormField label="Name">
                  <Input
                    focusBorderColor="none"
                    {...register("name")}
                    type="text"
                  />
                </FormField>
              </div>
              <div>
                <FormField label="Email">
                  <Input
                    focusBorderColor="none"
                    {...register("email")}
                    type="email"
                  />
                </FormField>
              </div>
              <div>
                <FormField label="Phone">
                  <Input
                    focusBorderColor="none"
                    {...register("phone")}
                    type="text"
                  />
                </FormField>
              </div>
              <div>
                <FormField label="Subject">
                  <Input
                    focusBorderColor="none"
                    {...register("subject")}
                    type="text"
                  />
                </FormField>
              </div>
            </div>
            <div className="area">
              <FormField label="Comment/ detailed question">
                <TextArea {...register("comment")} />
              </FormField>
            </div>
            <div className="feedbtn">
              <ButtonStyled type="submit">Send</ButtonStyled>
            </div>
          </form>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
