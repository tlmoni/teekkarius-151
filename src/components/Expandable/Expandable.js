import { ExpandMore } from "@mui/icons-material"
import styled from "styled-components"
import { useState } from "react"

const ExpandableTitle = styled.button`
  cursor: pointer;
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
  max-height: ${(props) => (props.$expanded ? "100%" : "0")};
  overflow: ${(props) => (props.$expanded ? "visible" : "hidden")};
  padding: ${(props) => (props.$expanded ? "25px 0" : "0")};
  transition: all 0.2s ease-in-out;
  font-family: "Josefin Slab", serif;
  font-size: 16pt;
  font-weight: 500;
  line-height: 24pt;
  color: #35312b;
  letter-spacing: 1px;
  word-spacing: 3px;
  text-shadow: 0.2px 0.2px 1.3px Sienna;
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 12pt;
  }

  @media screen and (max-width: 600px) {
    font-size: 10pt;
  }
`

const Chevron = styled(ExpandMore)`
  color: #3d1607;
  float: right;
  transition: transform 0.2ms ease-in-out;
  transform: ${(props) => (props.$expanded ? "rotate(180deg)" : "")};

  @media screen and (max-width: 900px) {
    max-width: 8%;
  }
`

const Image = styled.img`
  max-width: 98%;
`

const Expandable = (props) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <ExpandableTitle onClick={handleClick}>
        {props.title}
        <Chevron $expanded={expanded} />
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
