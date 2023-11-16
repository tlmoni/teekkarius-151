import {
  Email,
  Facebook,
  Info,
  Instagram,
  LocalActivity,
  Lyrics,
  Telegram
} from "@mui/icons-material"
import { useTranslation } from "react-i18next"
import Button from "../Button/Button"
import EventInfo from "../EventInfo/EventInfo"
import Expandable from "../Expandable/Expandable"
import Links from "../Links/Links"

const Events = () => {
  const { t } = useTranslation()

  return (
    <>
      <Expandable title={`13.11. ${t("alkupamaus")}`}>
        <EventInfo date="2023-11-13" time="12:00-20:00" location="Teekkarikylä" />
        <p>{t("alkupamaus-info")}</p>
        <Links>
          <Button
            as="a"
            href="https://t.me/Opiskelijakulttuurimuseobot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram id="icon" />
            <p>Opiskelijakulttuurimuseo bot</p>
          </Button>
        </Links>
      </Expandable>

      <Expandable title={`13.11. ${t("igs")}`} image="/images/IGS.png">
        <EventInfo date="2023-11-13" time="17:30" location="Servin mökki" />
        <p>{t("igs-info")}</p>
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
        </Links>
      </Expandable>

      <Expandable title={`14.11. ${t("fjs")}`} image="/images/FJS.png">
        <EventInfo date="2023-11-14" time="17:00" location="Servin mökki" />
        <p>{t("fjs-info")}</p>
        <Links>
          <Button
            as="a"
            href="https://www.facebook.com/events/691369186238851"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook id="icon" />
            <p>{t("fjs")}</p>
          </Button>
        </Links>
      </Expandable>

      <Expandable title={`14.11. ${t("lks")}`} image="/images/LKS.png">
        <EventInfo
          date="2023-11-14"
          time="18:00-01:00"
          location="Otakaari 20"
        />
        <p>{t("lks-info")}</p>
        <Links>
          <Button
            as="a"
            href="https://forms.office.com/e/8hPYekt3az"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Lyrics id="icon" />
            <p>{t("form")}</p>
          </Button>
          <Button
            as="a"
            href="https://kide.app/events/cc9191f8-46ed-4892-8ff0-6f7369086274"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocalActivity id="icon" />
            <p>kide.app</p>
          </Button>
          <Button
            as="a"
            href="https://t.me/lukkaritirehtoori"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram id="icon" />
            <p>lukkaritirehtoori</p>
          </Button>
        </Links>
      </Expandable>

      <Expandable
        title={`15.11. ${t("polin-appro")}`}
        image="/images/polin-appro.jpg"
      >
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
            <p>{t("polin-appro")}</p>
          </Button>
        </Links>
      </Expandable>

      <Expandable
        title={`16.11. ${t("elonkorjuu")}`}
        image="/images/elonkorjuu.jpg"
      >
        <EventInfo date="2023-11-16" time="18:00-00:00" location="Servin mökki" />
        <p>{t("elonkorjuu-info")}</p>
        <Links>
          <Button
            as="a"
            href="https://kide.app/events/f46b512c-15f5-422b-a294-64b675bc6529"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocalActivity id="icon" />
            <p>kide.app</p>
          </Button>
          <Button
            as="a"
            href="https://www.ayy.fi/fi/elonkorjuu-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Info id="icon" />
            <p>ayy.fi</p>
          </Button>
        </Links>
      </Expandable>

      <Expandable title={`16.11. ${t("merikanto")}`} image="/images/PK.jpg">
        <EventInfo date="2023-11-16" time="19:00" location="Ritarihuone" />
        <p>{t("merikanto-info")}</p>
        <Links>
          <Button
            as="a"
            href="https://polyteknikkojenkuoro.fi/konsertit/merikanto-aarre-ritarihuone-16-11-klo-19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Info id="icon" />
            <p>polyteknikkojenkuoro.fi</p>
          </Button>
          <Button
            as="a"
            href="https://www.lippu.fi/artist/polyteknikkojen-kuoro/merikanto-aarre-konsertti-3513378/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocalActivity id="icon" />
            <p>lippu.fi</p>
          </Button>
        </Links>
      </Expandable>

      <Expandable title={`17.11. ${t("pll")}`} image="/images/PLL.png">
        <EventInfo date="2023-11-17" time="16:30" location="Rantasauna" />
        <p>{t("pll-info")}</p>
      </Expandable>

      <Expandable title={`18.11. ${t("tpj")}`} image="/images/TPJ.png">
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
          <Button
            as="a"
            href="https://www.facebook.com/events/314706601277567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook id="icon" />
            <p>{t("tpj")}</p>
          </Button>
        </Links>
      </Expandable>

      <Expandable title={`19.11. ${t("sillis")}`} image="/images/sillis.jpg">
        <EventInfo date="2023-11-19" time="12:00-18:00" location="Servin mökki" />
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
          <Button
            as="a"
            href="https://www.facebook.com/events/7520316617981953"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook id="icon" />
            <p>{t("sillis")}</p>
          </Button>
        </Links>
      </Expandable>
    </>
  )
}

export default Events
