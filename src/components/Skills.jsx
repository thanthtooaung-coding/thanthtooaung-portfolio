import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const skillsText1 = "Experienced in Backend, Full Stack, and Java Desktop Development."
    const skillsText2 = "I build scalable and efficient applications and here's my projects and technical expertise."

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>{ skillsText1 }<br /> { skillsText2 }</p>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={meter1} alt="Web Development" />
                            <h5>Backend Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt="Brand Identity" />
                            <h5>Full Stack Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt="Logo Design" />
                            <h5>Java Desktop Development</h5>
                        </div>                        
                    </Carousel>
                    </div>
                </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Background Design" />
        </section>
    );
};

export default Skills;
