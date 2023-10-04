import { ExpandMore } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import Flag from "../Flag/Flag"

const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  margin-left: auto;
  height: fit-content;
  display: table;

  & img {
    width: 100px;
  }

  &:hover div {
    display: block;
  }
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  overflow: auto;
`

const Chevron = styled(ExpandMore)`
  color: #3d1607;
  float: right;
  transition: transform 0.2ms ease-in-out;
  transform: ${(props) => (props.$expanded ? "rotate(180deg)" : "")};
  max-width: 20px;

  @media screen and (max-width: 900px) {
    max-width: 16px;
  }
`

const LanguageSelection = () => {
  const { i18n } = useTranslation()

  const languages = ["en", "fi"]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <Dropdown>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >
          <Flag
            src={`/images/${i18n.language}.svg`}
            style={{ display: "inline-block" }}
          />
          <Chevron style={{ display: "inline-block" }} />
        </div>
        <DropdownContent>
          {languages
            .filter((language) => language !== i18n.language)
            .map((language) => {
              return (
                <Flag
                  key={language}
                  src={`/images/${language}.svg`}
                  onClick={() => changeLanguage(language)}
                />
              )
            })}
        </DropdownContent>
      </Dropdown>
    </>
  )
}

export default LanguageSelection
