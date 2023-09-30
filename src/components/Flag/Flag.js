import styled from "styled-components"

const Flag = styled.img`
  max-width: 50px;
  margin-left: auto;

  @media screen and (max-width: 1500px) {
    max-width: 40px;
  }

  @media screen and (max-width: 900px) {
    max-width: 30px;
  }
`

export default Flag
