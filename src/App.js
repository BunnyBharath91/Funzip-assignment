import Album from "./Album.js";
import "./App.css";

const menuList = ["HOME", "SCHEDULES", "RSVP", "GALLERY", "GIFT REGISTRY"];
const schedulesList = [
  {
    event: "Mehndi Ceremony",
    date: "March 25, 2024",
    time: "4:00 PM - 7:00 PM",
  },
  {
    event: "Sangeet Night",
    date: "March 26, 2024",
    time: "7:00 PM - 11:00 PM",
  },
  {
    event: "Haldi Ceremony",
    date: "March 27, 2024",
    time: "10:00 AM - 1:00 PM",
  },
  {
    event: "Pithi Ceremony",
    date: "March 28, 2024",
    time: "11:00 AM - 2:00 PM",
  },
  {
    event: "Tilak Ceremony",
    date: "March 29, 2024",
    time: "12:00 PM - 3:00 PM",
  },
  {
    event: "Bachelor Party",
    date: "March 27, 2024",
    time: "8:00 PM - 1:00 AM",
  },
];
const mainEventsList = [
  {
    coupleImg:
      "https://res.cloudinary.com/drbnxuf21/image/upload/v1711655604/story-six-1_crv8wl.png",
    event: "The Reception",
    dateAndTime: "Monday, 12 Apr, 2024 1:00 PM - 2:30 PM",
    venue:
      "Blue Ginger Lawn Taj West End 25,Race Course Road, Bengaluru, 560001",
  },
  {
    coupleImg:
      "https://res.cloudinary.com/drbnxuf21/image/upload/v1711655604/story-six-3_fm43wm.png",
    event: "The Ceremony",
    dateAndTime: "Monday, 15 Apr, 2024 1:00 PM - 2:30 PM",
    venue:
      "Blue Ginger Lawn Taj West End 25,Race Course Road, Bengaluru, 560001",
  },
  {
    coupleImg:
      "https://res.cloudinary.com/drbnxuf21/image/upload/v1711655604/story-six-2_syeh2a.png",
    event: "The Party",
    dateAndTime: "Monday, 25 Apr, 2024 1:00 PM - 2:30 PM",
    venue:
      "Blue Ginger Lawn Taj West End 25,Race Course Road, Bengaluru, 560001",
  },
];

const App = () => {
  console.log("Hi");

  const renderHomeContainer = () => (
    <div id="HOME" className="home-container">
      <div className="home-main-container">
        <div className="home-text-container">
          <h1 className="couple-names">Ritesh & Joya</h1>
          <p className="wedding-date">Our Big Day is November 15,2024</p>
          <img
            alt="flower-img"
            src="https://res.cloudinary.com/drbnxuf21/image/upload/v1711640639/date-shape_1_yaxjsg.png"
            className="flower-img"
          />
          <div className="time-left-container">
            <div className="time-left-card">
              <h1 className="time-left-number">184</h1>
              <p className="time-left-text">Days</p>
            </div>
            <div className="time-left-card">
              <h1 className="time-left-number">09</h1>
              <p className="time-left-text">Hours</p>
            </div>
            <div className="time-left-card">
              <h1 className="time-left-number">19</h1>
              <p className="time-left-text">Min</p>
            </div>
            <div className="time-left-card">
              <h1 className="time-left-number">02</h1>
              <p className="time-left-text">Secs</p>
            </div>
          </div>
        </div>
        <img
          alt="couple-main-img"
          src="https://res.cloudinary.com/drbnxuf21/image/upload/v1711638137/hero-6_1_r8vgup.png"
          className="couple-main-img"
        />
      </div>
      <img
        alt="home-frame"
        src="https://res.cloudinary.com/drbnxuf21/image/upload/v1711636764/title-flower-five_1_fnq8ot.png"
        className="home-frame"
      />
      <div className="home-bottom-container">
        <div className="home-bottom-text-container right">
          <h1 className="home-bottom-text-container-heading ">
            Ritesh Debtath
          </h1>
          <p className="home-bottom-text-container-message">
            We look forward to building a life filled wth love and countless
            memories. We are excited to share our joy.
          </p>
        </div>

        <div className="small-frame">
          <img
            alt="couple-cartoon-img"
            src="https://res.cloudinary.com/drbnxuf21/image/upload/v1711648219/indain-couple_1_1_fyz508.png"
            className="couple-cartoon-img"
          />
        </div>

        <div className="home-bottom-text-container ">
          <h1 className="home-bottom-text-container-heading">Ritesh Debtath</h1>
          <p className="home-bottom-text-container-message">
            We look forward to building a life filled wth love and countless
            memories. We are excited to share our joy.
          </p>
        </div>
      </div>
    </div>
  );

  const renderScheduleCard = (eventDetails) => {
    const { event, date, time } = eventDetails;
    return (
      <div className="small-frame ">
        <p className="event-name">{event}</p>
        <p className="event-date">{date}</p>
        <p className="event-time">{time}</p>
      </div>
    );
  };

  const renderMainEventCard = (eventDetails) => {
    const { event, coupleImg, venue, dateAndTime } = eventDetails;

    return (
      <div className="main-event-card">
        <div className="main-event-frame">
          <img
            alt="main-event-img"
            src={coupleImg}
            className="main-event-img"
          />
        </div>
        <h1 className="main-event-name">{event}</h1>
        <p className="main-event-date-and-time">{dateAndTime}</p>
        <p className="main-event-venue">{venue}</p>
      </div>
    );
  };

  const renderAlbumContainer = () => (
    <div id="GALLERY" className="album-section">
      <div className="album-background-section">
        <img
          alt="flower-img"
          src="https://res.cloudinary.com/drbnxuf21/image/upload/v1711657192/flower-shape1_1_kmurru.png"
          className="bg-flower-img"
        />
        <img
          alt="flower-img"
          src="https://res.cloudinary.com/drbnxuf21/image/upload/v1711657192/flower-shape3_1_gcidug.png"
          className="bg-flower-img"
        />
      </div>
      <div className="main-album-section">
        <h1 className="menu-item-heading">Album</h1>
        <Album />
      </div>
    </div>
  );

  return (
    <div className="bg-container">
      <div className="template-container">
        <div className="nav-bar">
          <h1 className="event-type">Wedding</h1>
          <ul className="menu-list">
            {menuList.map((eachItem) => (
              <li className="menu-item">{eachItem}</li>
            ))}
          </ul>
        </div>
        {renderHomeContainer()}
        <h1 className="menu-item-heading">Schedules</h1>
        <div id="SCHEDULES" className="schedules-container">
          {schedulesList.map((eachItem) => renderScheduleCard(eachItem))}
        </div>
        <div id="RSVP" className="rsvp-container">
          <form className="rsvp-card">
            <h1 className="rsvp-card-heading">Are You Attending?</h1>
            <p className="rsvp-question">Name</p>
            <hr className="horizontal-line" />
            <p className="rsvp-question">Email</p>
            <hr className="horizontal-line" />
            <div className="radio-container">
              <div className="radio-card">
                <input
                  id="radio-yes"
                  type="radio"
                  name="reply"
                  className="radio-button"
                />
                <label htmlFor="radio-yes" className="radio-label">
                  Yes, I will be there
                </label>
              </div>
              <div className="radio-card">
                <input
                  id="radio-sorry"
                  type="radio"
                  name="reply"
                  className="radio-button"
                />
                <label htmlFor="radio-sorry" className="radio-label">
                  Sorry, I can't come
                </label>
              </div>
            </div>
            <p className="rsvp-question">Number of Guests</p>
            <hr className="horizontal-line" />
            <p className="rsvp-question">What Will You Be Attending</p>
            <hr className="horizontal-line" />
            <button className="rsvp-button">RSVP</button>
          </form>
        </div>
        <h1 className="menu-item-heading">When & Where</h1>
        <div className="main-events-container">
          {mainEventsList.map((eachItem) => renderMainEventCard(eachItem))}
        </div>
        <img
          alt="google-map"
          src="https://res.cloudinary.com/drbnxuf21/image/upload/v1711656650/Rectangle_19_spkin5.png"
          className="google-map"
        />
        {renderAlbumContainer()}
        <div className="footer-container">
          <img
            alt="footer-flowers"
            src="https://res.cloudinary.com/drbnxuf21/image/upload/v1711659451/footer-shape-1_1_ithnfx.png"
            className="footer-flowers"
          />
          <div className="footer-text-container">
            <p className="final-invitation">
              Let us come together in the spirit of love and joy, as we embark
              on this beautiful journey of togetherness. Your presence will add
              warmth and blessings to our union, making it a celebration to
              remember in our hearts and souls.
            </p>
            <ul className="footer-container-menu-list">
              {menuList.map((eachItem) => (
                <li className=" footer-container-menu-item">{eachItem}</li>
              ))}
            </ul>
          </div>
          <img
            alt="footer-flower"
            src="https://res.cloudinary.com/drbnxuf21/image/upload/v1711659451/footer-shape-2_1_mucasy.png"
            className="footer-flower "
          />
        </div>
      </div>
    </div>
  );
};

export default App;
