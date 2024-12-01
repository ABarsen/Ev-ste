import "./Hero.css";
import PropTypes from "prop-types";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className="hero">
      <div className="herotext">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=" click me"
          />
          <p>see the video</p>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  heroData: PropTypes.shape({
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
  }).isRequired,
  setHeroCount: PropTypes.func.isRequired,
  heroCount: PropTypes.number.isRequired,
  setPlayStatus: PropTypes.func.isRequired,
  playStatus: PropTypes.bool.isRequired,
};

Hero.defaultProps = {
  heroData: {
    text1: " Lets dive in",
    text2: " let get your Ev ",
  },
  heroCount: 0,
  playStatus: false,
};

export default Hero;
