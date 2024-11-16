import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import MailchimpForm from "./MailchimpForm";

import SocialIcons from "./SocialIcons";

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
                        <SocialIcons />
                        <p>Copyright &copy; 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
