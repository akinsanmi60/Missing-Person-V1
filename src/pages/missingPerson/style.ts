import styled from "styled-components";

const MissingWrapper = styled.div`
  .wallpaper {
    background: #42275a; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #734b6d, #42275a);
    background: linear-gradient(to right, #734b6d, #42275a);
    color: var(--neutral-light);
    padding: 40px 60px;
  }
`;
export default MissingWrapper;
