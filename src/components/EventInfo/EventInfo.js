import { AccessTime, CalendarToday, Place } from "@mui/icons-material"
import styled from "styled-components"

const EventInfoBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  text-align: center;
  margin-bottom: 20px;

  & p {
    text-shadow: 0.2px 0.2px 1.3px Sienna;
    padding-left: 5px;
    margin-right: 20px;
  }

  & #icon {
    color: #35312b;
  }
`

const EventDetail = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 5px;
`

const EventInfo = ({ date, time, location }) => {
  return (
    <>
      <EventInfoBar>
        <EventDetail>
          <CalendarToday id="icon" />
          <p>{date}</p>
        </EventDetail>
        <EventDetail>
          <AccessTime id="icon" />
          <p>{time}</p>
        </EventDetail>
        <EventDetail>
          <Place id="icon" />
          <p>{location}</p>
        </EventDetail>
      </EventInfoBar>
    </>
  )
}

export default EventInfo
