import "./Background.css";
import video1 from "../../assets/video1.mp4";
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const Background = ({ playStatus, heroCount }) => {
    const backgroundContent = playStatus ? (
        <video className="background" autoPlay loop muted>
            <source src={video1} type="video/mp4" />
        </video>
    ) : (
        <img 
            src={heroCount === 0 ? image1 : heroCount === 1 ? image2 : image3} 
            className="background" 
            alt="" 
        />
    );

    return (
        <div className="background-container">
            {backgroundContent}
        </div>
    );
};

export default Background;