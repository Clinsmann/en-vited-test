import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
import { AppCtx } from "../../store/events-context";
import ArrowIcon from "../../assets/icons/Arrow.svg";
import CalenderIcon from "../../assets/icons/Calendar.svg";
import LocationIcon from "../../assets/icons/Location.svg";
import EventDetailImage from "../../assets/event-detail.svg";

export interface Event {
  name: string;
  hostName: string;
  location: string;
  startTime: string;
  endTime: string;
  image?: string;
}

interface EventDetailItemProps {
  title: string;
  icon: string;
  detail: React.ReactNode;
}

const EventDetailItem: React.FC<EventDetailItemProps> = ({
  title,
  icon,
  detail,
}) => (
  <div className="detail-container">
    <span className="icon-container">
      <img src={icon} alt="event" />
    </span>
    <div className="detail-item">
      <div>
        <div>{title ? <h4>{title}</h4> : ""}</div>
        {detail}
      </div>
      <img src={ArrowIcon} alt="see more" />
    </div>
  </div>
);

const EventDetail: React.FC = () => {
  const navigate = useNavigate();
  const { event } = useContext(AppCtx);

  useEffect(() => {
    if (!event) {
      navigate("/");
    }
  }, [event, navigate]);

  return (
    <div className="page-wrapper">
      <div className="event-detail">
        <img src={EventDetailImage} alt="event" className="event-image" />

        <section>
          <h2>{event?.name}</h2>
          <p>
            Hosted by <strong>{event?.hostName}</strong>
          </p>

          <EventDetailItem
            icon={CalenderIcon}
            title={new Date(event?.startTime!).toUTCString()}
            detail={
              <span>
                to <strong>{new Date(event?.endTime!).toUTCString()}</strong>
              </span>
            }
          />

          <EventDetailItem
            icon={LocationIcon}
            title="Street name"
            detail={event?.location}
          />
        </section>
      </div>
    </div>
  );
};

export default EventDetail;
