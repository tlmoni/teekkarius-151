import styled from "styled-components"

const Sponsor = styled.img`
  padding-top: 40px;
  padding-bottom: 40px;
  width: 20%;

  @media screen and (max-width: 1200px) {
    width: 30%;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 900px) {
    width: 35%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 40%;
  }
`

export default Sponsor
