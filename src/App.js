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

          <Expandable title={t("igs")}>
            <p>{t("lorem")}</p>
          </Expandable>
          <Expandable title={t("fjs")}>
            <p>{t("fjs-info")}</p>
          </Expandable>
          <Expandable title={t("lks")}>
            <p>{t("lks-info")}</p>
          </Expandable>
          <Expandable title={t("polin-appro")}>
            <p>{t("polin-appro-info")}</p>
          </Expandable>
          <Expandable title={t("elonkorjuu")}>
            <p>{t("elonkorjuu-info")}</p>
          </Expandable>
          <Expandable title={t("pll")}>
            <p>{t("pll-info")}</p>
          </Expandable>
          <Expandable title={t("tpj")} image="/images/TPJ.png">
            <p>{t("tpj-info")}</p>
          </Expandable>
          <Expandable title={t("sillis")}>
            <p>{t("fjs-info")}</p>
          </Expandable>

          <h2>{t("sponsors")}</h2>

          <SponsorsList />
        </Content>
      </Container>
    </>
  )
}

export default App
