import SponsorsList from "./components/SponsorsList/SponsorsList"
import Expandable from "./components/Expandable/Expandable"
import Background from "./components/Background/Background"
import Container from "./components/Container/Container"
import Content from "./components/Content/Content"
import { useTranslation } from "react-i18next"
import Title from "./components/Title/Title"
import Flag from "./components/Flag/Flag"
import "./App.css"

const App = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("fi")
    } else if (i18n.language === "fi") {
      i18n.changeLanguage("en")
    } else {
      i18n.changeLanguage("fi")
    }
  }

  const getLanguageChangeIcon = () => {
    if (i18n.language === "en") {
      return "fi"
    } else if (i18n.language === "fi") {
      return "en"
    } else {
      return "fi"
    }
  }

  return (
    <>
      <Background />
      <Container>
        <Content>
          <Flag
            src={`/images/${getLanguageChangeIcon()}.svg`}
            onClick={changeLanguage}
          />

          <Title src={"/images/teekkarius151-musta.png"} alt="Teekkarius 151" />

          <p>{t("info")}</p>

          <h1>{t("events")}</h1>

          <Expandable title={t("igs")} content={t("lorem")} />
          <Expandable title={t("fjs")} content={t("fjs-info")} />
          <Expandable title={t("lks")} content={t("lks-info")} />
          <Expandable
            title={t("polin-appro")}
            content={t("polin-appro-info")}
          />
          <Expandable title={t("elonkorjuu")} content={t("elonkorjuu-info")} />
          <Expandable title={t("pll")} content={t("pll-info")} />
          <Expandable title={t("tpj")} content={t("tpj-info")} image="/images/TPJ.png" />
          <Expandable title={t("sillis")} content={t("sillis-info")} />

          <h2>{t("sponsors")}</h2>

          <SponsorsList />
        </Content>
      </Container>
    </>
  )
}

export default App
