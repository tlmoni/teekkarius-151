import styled from "styled-components"

const Content = styled.div`
  position: relative;
  top: 10px;
  background: url("/images/paper.png");
  background-size: 1800px;
  background-position: center right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 55%;
  padding: 30px 80px 200px 80px;
  z-index: 1;
  filter: brightness(0.9) sepia(20%) saturate(80%);
  border-radius: 10px;
  height: 90vh;
  clip-path: polygon(
    0% 0%,
    0% 93%,
    2% 98%,
    3% 99%,
    8% 95%,
    12% 94%,
    15% 97%,
    17% 93%,
    20% 98%,
    22% 97%,
    25% 99%,
    31% 94%,
    35% 93%,
    39% 96%,
    43% 93%,
    45% 94%,
    47% 95%,
    50% 92%,
    52% 96%,
    54% 93%,
    58% 92%,
    60% 95%,
    62% 93%,
    65% 96%,
    69% 93%,
    72% 93%,
    75% 94%,
    79% 97%,
    81% 94%,
    85% 93%,
    88% 92%,
    90% 95%,
    93% 93%,
    95% 92%,
    97% 95%,
    100% 97%,
    100% 0%
  );
  overflow: auto;

  @media screen and (max-width: 1800px) {
    max-width: 60%;
  }

  @media screen and (max-width: 1500px) {
    max-width: 68%;
  }

  @media screen and (max-width: 868px) {
    padding: 30px 60px 50px 60px;
    max-width: 75%;
  }

  @media screen and (max-width: 560px) {
    max-width: 80%;
    padding: 30px 30px 50px 30px;
  }
`

export default Content
