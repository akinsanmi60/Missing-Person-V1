import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Box,
  Text,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  FaBars,
  FaBuilding,
  FaCar,
  FaFacebookSquare,
  FaLinkedin,
  FaNewspaper,
  FaQuestion,
  FaReceipt,
  FaRocketchat,
  FaTwitterSquare,
  FaUserGraduate,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import routesLinks from "./routes";
import ButtonBox, { DrawerButton, IconBox } from "./style";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>
        <Box display="flex" color="#0E2038">
          <Text marginTop="-1" marginRight="2" fontWeight="800">
            Menu
          </Text>
          <FaBars />
        </Box>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        blockScrollOnMount={false}
      >
        <DrawerOverlay />
        <DrawerContent color="#0E2038">
          <DrawerCloseButton
            color="white"
            fontWeight="900"
            fontSize="13"
            outline="none"
          />
          <Box
            // bgImage={ride}
            bgPosition="center"
            backgroundRepeat="no-repeat"
            h="220px"
            paddingLeft="6"
          >
            <Text marginTop="130px" fontWeight="900" fontSize="30">
              People
            </Text>
          </Box>
          <DrawerBody>
            {routesLinks.map(routeLink => {
              const gradIcon = routeLink.icon === "stud";
              const bizIcon = routeLink.icon === "biz";
              const motoIcon = routeLink.icon === "moto";
              const remtIcon = routeLink.icon === "remt";
              const pressIcon = routeLink.icon === "press";
              const chatIcon = routeLink.icon === "chat";
              const qusetIcon = routeLink.icon === "ques";
              return (
                <Box key={routeLink.title}>
                  <Link to={routeLink.path} onClick={onClose}>
                    <Box display="flex" borderBottomWidth="1px" padding="2">
                      <Text paddingRight="3" marginTop="1">
                        {gradIcon ? (
                          <FaUserGraduate className="iconstyle" />
                        ) : bizIcon ? (
                          <FaBuilding className="iconstyle" />
                        ) : motoIcon ? (
                          <FaCar />
                        ) : remtIcon ? (
                          <FaReceipt />
                        ) : pressIcon ? (
                          <FaNewspaper />
                        ) : qusetIcon ? (
                          <FaQuestion />
                        ) : chatIcon ? (
                          <FaRocketchat />
                        ) : null}
                      </Text>
                      <Text>{routeLink.title}</Text>
                    </Box>
                  </Link>
                </Box>
              );
            })}
            <div>
              <ButtonBox>
                <DrawerButton type="submit">
                  <Link to="/login">Login</Link>
                </DrawerButton>

                <DrawerButton type="submit">
                  <Link to="/register">Sign up</Link>
                </DrawerButton>
              </ButtonBox>

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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
