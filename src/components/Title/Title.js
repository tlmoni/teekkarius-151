import styled from "styled-components"

const Title = styled.img`
  max-width: 80%;

  @media screen and (max-width: 1500px) {
    max-width: 90%;
  }

  @media screen and (max-width: 900px) {
    max-width: 100%;
  }

  @media screen and (max-width: 560px) {
    max-width: 100%;
  }
`

export default Title
