import { useTranslation } from "react-i18next"
import "./App.css"
import Background from "./components/Background/Background"
import Container from "./components/Container/Container"
import Content from "./components/Content/Content"
import Events from "./components/Events/Events"
import LanguageSelection from "./components/LanguageSelection/LanguageSelection"
import Sponsors from "./components/Sponsors/Sponsors"
import Title from "./components/Title/Title"

const App = () => {
  const { t } = useTranslation()

  return (
    <>
      <Background />
      <Container>
        <Content>
          <LanguageSelection />

          <Title src={"/images/Teekkarius-151.svg"} alt="Teekkarius 151" />

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
