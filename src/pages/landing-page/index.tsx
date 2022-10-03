import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./styles.scss";
import EventImage from "../../assets/event-home.svg";

const LandingPage: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 968px)",
  });

  return (
    <div className="event-home">
      <div className="event-container">
        <section>
          <h1>Imagine if</h1>
          <h1 className="colorful-heading">Snapchat</h1>
          <h1>Had events.</h1>

          <p>
            Easily host and share events with your friends across any social
            media.
          </p>

          {isDesktopOrLaptop ? (
            <Link to="/create" className="button">
              <span className="emoji">🎉</span>
              <span>Create my event</span>
            </Link>
          ) : (
            ""
          )}
        </section>

        <img src={EventImage} alt="event" className="event-image" />

        {!isDesktopOrLaptop ? (
          <Link to="/create" className="button">
            <span className="emoji">🎉</span>
            <span>Create my event</span>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LandingPage;
