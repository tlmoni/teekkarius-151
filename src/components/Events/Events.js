import { Instagram, LocalActivity, Telegram } from "@mui/icons-material"
import Expandable from "../Expandable/Expandable"
import { useTranslation } from "react-i18next"
import Button from "../Button/Button"
import Links from "../Links/Links"

const Events = () => {
  const { t } = useTranslation()

  return (
    <>
      <Expandable title={t("igs")}>
        <p>{t("igs-info")}</p>
      </Expandable>
      <Expandable title={t("fjs")}>
        <p>{t("fjs-info")}</p>
      </Expandable>
      <Expandable title={t("lks")}>
        <p>{t("lks-info")}</p>
      </Expandable>
      <Expandable title={t("polin-appro")}>
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
        </Links>
      </Expandable>
      <Expandable title={t("elonkorjuu")}>
        <p>{t("elonkorjuu-info")}</p>
      </Expandable>
      <Expandable title={t("pll")}>
        <p>{t("pll-info")}</p>
      </Expandable>
      <Expandable title={t("tpj")} image="/images/TPJ.png">
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
        </Links>
      </Expandable>
      <Expandable title={t("sillis")}>
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
