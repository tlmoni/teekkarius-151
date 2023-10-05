import { ExpandMore } from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import Flag from "../Flag/Flag"

const Dropdown = styled.div`
  display: inline-block;
  position: relative;
  margin-left: auto;
  height: fit-content;

  & img {
    width: 100px;
  }

  &:hover div {
    display: flex;
  }
`

const DropdownContent = styled.div`
  display: none;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
  position: absolute;
`

const Chevron = styled(ExpandMore)`
  color: #3d1607;
  float: right;
  max-width: 20px;

  @media screen and (max-width: 900px) {
    max-width: 16px;
  }
`

const LanguageSelection = () => {
  const { i18n } = useTranslation()

  const languages = ["fi", "se", "en"]

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
