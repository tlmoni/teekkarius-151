import styled from "styled-components"

const Title = styled.img`
  width: 80%;
  margin-bottom: 5vh;

  @media screen and (max-width: 1500px) {
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`

export default Title
