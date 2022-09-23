import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { SinglePerson } from "utils/Api-Routes";
import { getRequest } from "utils/apiCall";
import { queryKeys } from "utils/queryKey";
import OuterLayout from "styles/layout";
import moment from "moment";
import PersonWrapper from "./style";
import { Table, Tbody, Td, Tr } from "@chakra-ui/react";

type DataProp = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  bloodGroup: string;
  age: string;
  gender: string;
  email: string;
  image: string;
  address: {
    address: string;
    city: string;
    postalcode: string;
  };
  birthDate: string;
  height: number;
  weight: number;
  hair: {
    color: string;
    type: string;
  };
  eyeColor: string;
  remarks: string;
  reward: string;
  details: string;
};

function PersonPage() {
  const { id } = useParams();
  const personId = Number(id);

  const { data, isLoading, isError, isLoadingError } = useQuery(
    [queryKeys.getSingleMissingPerson],
    () => getRequest({ url: SinglePerson(personId) }),
    {
      refetchOnWindowFocus: false,
    },
  );

  const personData = data as DataProp;

  const fullName = `${personData?.firstName} - "${personData?.maidenName}" - ${personData?.lastName}`;
  const userTime = moment().format("dddd, MMMM Do YYYY");

  return (
    <PersonWrapper>
      <OuterLayout>
        {isLoading ? (
          <p>Loading</p>
        ) : isError ? (
          <p>Error occured</p>
        ) : isLoadingError ? (
          <p>Error occured while loading</p>
        ) : personData ? (
          <div className="boxperson">
            <div className="titleName">
              <h1>{fullName}</h1>
            </div>

            <div className="incidentdetail">
              <p className="data">{userTime}</p>
              <p className="data">{`${personData?.address?.address}, ${personData?.address?.city}`}</p>
            </div>

            <div className="imagepreview">
              <div className="imgbox">
                <img src={personData?.image} alt="personimage" />
              </div>
              <div className="pdf">
                <div className="pdfimg">
                  <img src={personData?.image} alt="personimage" />
                </div>
              </div>
              <div className="imgtext">
                <h2>Download Text</h2>
                <p>
                  <a href="text.com">click to download</a>
                </p>
              </div>
            </div>

            <div className="tabledetail">
              <Table variant="striped" size="sm" colorScheme="blue">
                <Tbody>
                  <Tr>
                    <Td>Date(s) of Birth Used</Td>
                    <Td>{personData?.birthDate}</Td>
                  </Tr>
                  <Tr>
                    <Td>Age</Td>
                    <Td>{personData?.age}</Td>
                  </Tr>
                  <Tr>
                    <Td>Blood Group</Td>
                    <Td>{personData?.bloodGroup}</Td>
                  </Tr>
                  <Tr>
                    <Td>Gender</Td>
                    <Td>{personData?.gender}</Td>
                  </Tr>
                  <Tr>
                    <Td>Hair</Td>
                    <Td>{personData?.hair?.type}</Td>
                  </Tr>
                  <Tr>
                    <Td>Hair Color</Td>
                    <Td>{personData?.hair?.color}</Td>
                  </Tr>
                  <Tr>
                    <Td>Eyes</Td>
                    <Td>{personData?.eyeColor}</Td>
                  </Tr>
                  <Tr>
                    <Td>Height</Td>
                    <Td>{personData?.height}cm</Td>
                  </Tr>
                  <Tr>
                    <Td>Weight</Td>
                    <Td>{personData?.weight}kg</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>

            <div className="description">
              <div className="remarks">
                <h3>Reward:</h3>
                <p>{personData?.reward || "N/A"}</p>
              </div>
              <div className="remarks">
                <h3>Remarks:</h3>
                <p>{personData?.remarks || "N/A"}</p>
              </div>
              <div className="remarks">
                <h3>Details:</h3>
                <p>{personData?.details || "N/A"}</p>
              </div>
            </div>

            <div className="tipsubmission">
              <h3>Submit a Tip:</h3>
              <p>
                Anyone with information related to the disappearance of{" "}
                <span>{fullName}</span> is asked to call the Police
                Officer-in-Charge Line at <span>614-461-8477</span> (TIPS). You
                may also contact our Tip Line at <span>+234816472797</span> or
                fill our{" "}
                <span>
                  <Link to="/tip_form" className="Link">
                    tip form
                  </Link>
                </span>
                .
              </p>
            </div>
          </div>
        ) : null}
      </OuterLayout>
    </PersonWrapper>
  );
}

export default PersonPage;
