import {
  Email,
  Facebook,
  Instagram,
  LocalActivity,
  Telegram
} from "@mui/icons-material"
import Expandable from "../Expandable/Expandable"
import EventInfo from "../EventInfo/EventInfo"
import { useTranslation } from "react-i18next"
import Button from "../Button/Button"
import Links from "../Links/Links"

const Events = () => {
  const { t } = useTranslation()

  return (
    <>
      <Expandable title={t("alkupamaus")}>
        <EventInfo date="2023-11-13" time="?" location="?" />
        <p>{t("alkupamaus-info")}</p>
      </Expandable>

      <Expandable title={t("igs")}>
        <EventInfo date="2023-11-13" time="?" location="Servin mökki" />
        <p>{t("igs-info")}</p>
      </Expandable>

      <Expandable title={t("fjs")}>
        <EventInfo date="2023-11-14" time="?" location="Servin mökki" />
        <p>{t("fjs-info")}</p>
      </Expandable>

      <Expandable title={t("lks")}>
        <EventInfo date="2023-11-14" time="?" location="Otakaari 20" />
        <p>{t("lks-info")}</p>
      </Expandable>

      <Expandable title={t("polin-appro")} image="/images/polin-appro.jpg">
        <EventInfo
          date="2023-11-15"
          time="16:00-04:00"
          location="Apollo Live Club"
        />
        <p>{t("polin-appro-info")}</p>
        <Links>
          <Button
            as="a"
            href="https://www.instagram.com/teekkarijaosto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram id="icon" />
            <p>teekkarijaosto</p>
          </Button>
          <Button
            as="a"
            href="https://t.me/polinappro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram id="icon" />
            <p>polinappro</p>
          </Button>
          <Button
            as="a"
            href="https://www.facebook.com/events/842412413794098"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook id="icon" />
            <p>Polin Appro 2023</p>
          </Button>
        </Links>
      </Expandable>

      <Expandable title={t("elonkorjuu")}>
        <EventInfo date="2023-11-16" time="?" location="Servin mökki" />
        <p>{t("elonkorjuu-info")}</p>
      </Expandable>

      <Expandable title={t("pll")}>
        <EventInfo date="2023-11-17" time="?" location="Rantasauna" />
        <p>{t("pll-info")}</p>
      </Expandable>

      <Expandable title={t("tpj")} image="/images/TPJ.png">
        <EventInfo date="2023-11-18" time="19:00" location="Kalastajatorppa" />
        <p>{t("tpj-info")}</p>
        <Links>
          <Button
            as="a"
            href="https://kide.app/events/c44c7110-c1a7-4e3d-80e7-92e822f7a9b2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocalActivity id="icon" />
            <p>kide.app</p>
          </Button>
          <Button
            as="a"
            href="mailto:senja.santala@ayy.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email id="icon" />
            <p>senja.santala@ayy.fi</p>
          </Button>
          <Button
            as="a"
            href="https://t.me/senjasantala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram id="icon" />
            <p>senjasantala</p>
          </Button>
        </Links>
      </Expandable>

      <Expandable title={t("sillis")}>
        <EventInfo date="2023-11-19" time="?" location="Servin mökki" />
        <p>{t("sillis-info")}</p>
        <Links>
          <Button
            as="a"
            href="https://kide.app/events/c44c7110-c1a7-4e3d-80e7-92e822f7a9b2/tickets/16d5ae9c-bf8d-42e2-8bf9-ed901d2ef86b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocalActivity id="icon" />
            <p>kide.app</p>
          </Button>
        </Links>
      </Expandable>
    </>
  )
}

export default Events
