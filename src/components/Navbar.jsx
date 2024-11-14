import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <Link to={"https://www.linkedin.com/in/thant-htoo-aung-b47374267"} target="blank"><img src={navIcon1} alt="LinkedIn Icon" /></Link>
                            <Link to={"https://github.com/thanthtooaung-coding"} target="blank"><img src={navIcon2} alt="GitHub Icon" /></Link>
                            <Link to={"https://www.facebook.com/alvin.9698"} target="blank"><img src={navIcon3} alt="Facebook Icon" /></Link>
                            <Link to={"https://x.com/VinnnDev"} target="blank"><img src={navIcon4} alt="X Icon" /></Link>
                        </div>
                        <HashLink to='#connect'>
                            <button className="vvd"><span>Let’s Connect</span></button>
                        </HashLink>
                    </span>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </BrowserRouter>
    );
};

export default NavBar