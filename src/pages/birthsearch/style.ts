import styled from "styled-components";

const BirthWrapper = styled.div`
  .wallpaper {
    background: #ff00cc; /* fallback for old browsers */
    /* background: -webkit-linear-gradient(to right, #333399, #ff00cc); */
    background: linear-gradient(to right, #333399, #ff00cc);
    color: var(--neutral-light);
    padding: 40px 60px;
  }
  @media screen and (max-width: 375px) {
    .wallpaper {
      padding: 20px;
    }
  }
`;
export default BirthWrapper;
