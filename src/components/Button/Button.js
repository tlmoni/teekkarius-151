import styled from "styled-components"

const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid #807663;
  color: #35312b;
  margin: 0.1em 0.5em;
  padding: 0.25em 1em;
  overflow: visible;
  text-align: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & p {
    text-shadow: 0.2px 0.2px 1.3px Sienna;
    padding-left: 5px;
  }

  & #icon {
    color: #35312b;
  }

  &:hover {
    background: #807663;
    cursor: pointer;
  }

  &:hover p {
    color: #ebebe4;
    text-shadow: none;
  }

  &:hover #icon {
    color: #ebebe4;
  }
`

export default Button
