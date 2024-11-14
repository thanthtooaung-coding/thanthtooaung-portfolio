import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import MailchimpForm from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col xs={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col xs={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="LinkedIn Icon" /></a>
                            <a href="#"><img src={navIcon2} alt="GitHub Icon" /></a>
                            <a href="#"><img src={navIcon3} alt="Facebook Icon" /></a>
                            <a href="#"><img src={navIcon4} alt="X Icon" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
