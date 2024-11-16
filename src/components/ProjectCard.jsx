import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, githubLink, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <Link
                        className="github-link"
                        to={githubLink}
                        target="_blank"
                    >See more in GitHub</Link>
                </div>
            </div>
        </Col>
    )
}
