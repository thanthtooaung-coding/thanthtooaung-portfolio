import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useEffect, useState } from "react";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        fetch("https://portfolio-backend-production-9324.up.railway.app/projects")
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setFilteredProjects(data);
            })
      .catch(error => console.error("Error fetching the projects data: ", error));
    }, []);

    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project => 
                project.category && 
                project.category.toLowerCase() === activeCategory.toLowerCase()
            );
            setFilteredProjects(filtered);
        }
    }, [activeCategory, projects]);

    const handleSelect = (eventKey) => {
        setActiveCategory(eventKey);
    }

    const renderProjects = () => (
        <Row>
            {
                filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))
            }
        </Row>
    );

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Projects</h2>
                            <p>Explore my project showcase, featuring creative solutions and innovative designs. Each project highlights my skills and dedication to building impactful digital experiences.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="all" onSelect={handleSelect}>
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="full-stack">Full-Stack</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="frontend">Frontend</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="backend">Backend</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <Tab.Pane eventKey="all">
                                        {renderProjects()}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="full-stack">
                                        {renderProjects()}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="frontend">
                                        {renderProjects()}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="backend">
                                        {renderProjects()}
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

export default Projects;