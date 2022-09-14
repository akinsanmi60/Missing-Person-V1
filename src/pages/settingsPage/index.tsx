/* eslint-disable @typescript-eslint/naming-convention */
import React, { useContext, useState } from "react";
import bgColor from "../../assets/bgblue.jpeg";
import { Avatar, Input, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import SettingsWrapper, { ImageWrapper } from "./styled";
import AuthContext from "contexts/AuthProvider";
import FormField from "common/FormField";
import ChangePasswordModal from "./componentModal/modalChange";
import EditProfile from "./componentModal/editProfile";

const ImageComponent = () => {
  return (
    <ImageWrapper>
      <img src={bgColor} alt="bg" className="bg" />
    </ImageWrapper>
  );
};

function SettingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { authUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <SettingsWrapper>
      <div className="head">
        <h1> Use Id-Nos: {authUser?.user.userIdNos}</h1>
      </div>
      <div className="boxsetting">
        <div className="hero">
          <ImageComponent />
          <div className="simple-info">
            <div className="dp">
              <Wrap>
                <WrapItem>
                  <Avatar
                    className="avatar"
                    position="absolute"
                    marginTop="-5"
                    size="2xl"
                    name="Akintunde Akinsanmi"
                    src="https://bit.ly/die"
                    bg="blue.500"
                  />
                </WrapItem>
              </Wrap>
            </div>
            <div className="basic-info">
              <h1 className="guardian-name">Akintunde Akinsanmi</h1>
              <div className="guardian-level value">
                <span>akintunde60@gmail.com</span>
              </div>
              <div className="guardian-level value">
                <span>2348164279799</span>
              </div>
              <div className="guardian-level value">
                Joined <span>April 2022 </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!editMode ? (
        <div className="displaysetting">
          <div className="userdetail">
            <div className="btned">
              <button onClick={handleEdit} className="editbtn">
                Edit
              </button>
            </div>
            <div className="displayform">
              <div className="lays">
                <div>
                  <FormField label="Phone Number">
                    <Input
                      readOnly
                      defaultValue={authUser?.user.phoneNumber || "N/A"}
                    />
                  </FormField>
                </div>
                <div>
                  <FormField label="Address">
                    <Input
                      readOnly
                      defaultValue={authUser?.user.address || "N/A"}
                    />
                  </FormField>
                </div>
              </div>
              <div className="lays">
                <div>
                  <FormField label="Local Government Area">
                    <Input
                      readOnly
                      defaultValue={authUser?.user.lga || "N/A"}
                    />
                  </FormField>
                </div>
                <div>
                  <FormField label="State">
                    <Input
                      readOnly
                      defaultValue={authUser?.user.state || "N/A"}
                    />
                  </FormField>
                </div>
              </div>
              <div className="passbtn">
                <p>To change password click</p>
                <button
                  type="button"
                  onClick={() => {
                    onOpen();
                  }}
                >
                  Change😃
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EditProfile setEditMode={setEditMode} />
      )}
      <ChangePasswordModal onClose={onClose} isOpen={isOpen} />
    </SettingsWrapper>
  );
}

export default SettingPage;
