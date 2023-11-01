import { ExpandMore } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"

const ExpandableTitle = styled.div`
  padding: 18px;
  width: 100%;
  border: none;
  border-bottom: 0.5px solid #3d1607;
  box-shadow: 0px 0.5px Sienna;
  background-color: transparent;
  text-align: left;
  outline: none;
  font-family: "Playfair Display SC";
  font-size: 20pt;
  font-weight: 500;
  color: #35312b;
  letter-spacing: 1px;
  word-spacing: 3px;
  text-shadow: 0.2px 0.2px 1.3px Sienna;

  &:hover {
    background-color: color-mix(in srgb, #a69b85 20%, transparent);
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    font-size: 18pt;
  }

  @media screen and (max-width: 900px) {
    font-size: 16pt;
  }

  @media screen and (max-width: 600px) {
    font-size: 12pt;
  }

  @media screen and (max-width: 400px) {
    font-size: 10pt;
  }
`

const ExpandableContent = styled.div`
  height: ${({ $expanded }) => ($expanded ? "max-content" : "0")};
  padding-bottom: ${({ $expanded }) => ($expanded ? "25px" : "0")};
  overflow: ${({ $expanded }) => ($expanded ? "visible" : "hidden")};
  max-width: 98%;
  transition: all 0.2s ease-in-out;
  text-align: center;
  display: inline-block;
  justify-content: center;
`

const Chevron = styled(ExpandMore)`
  color: #3d1607;
  float: right;

  @media screen and (max-width: 900px) {
    max-width: 8%;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Expandable = (props) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  const rotateChevron = {
    transform: expanded ? "rotate(180deg)" : "",
    transition: "transform 0.2s ease-in-out"
  }

  return (
    <>
      <ExpandableTitle onClick={handleClick}>
        {props.title}
        <Chevron $expanded={expanded} style={rotateChevron} />
      </ExpandableTitle>
      <ExpandableContent $expanded={expanded}>
        <Image src={props.image} />
        <br />
        {props.children}
      </ExpandableContent>
    </>
  )
}

export default Expandable
