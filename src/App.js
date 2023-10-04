import LanguageSelection from "./components/LanguageSelection/LanguageSelection"
import Background from "./components/Background/Background"
import Container from "./components/Container/Container"
import Sponsors from "./components/Sponsors/Sponsors"
import Content from "./components/Content/Content"
import Events from "./components/Events/Events"
import { useTranslation } from "react-i18next"
import Title from "./components/Title/Title"
import "./App.css"

const App = () => {
  const { t } = useTranslation()

  return (
    <>
      <Background />
      <Container>
        <Content>
          <LanguageSelection />

          <Title src={"/images/teekkarius151-musta.png"} alt="Teekkarius 151" />

          <p>{t("info")}</p>

          <h1>{t("events")}</h1>
          <Events />

          <h2>{t("sponsors")}</h2>
          <Sponsors />
        </Content>
      </Container>
    </>
  )
}

export default App
