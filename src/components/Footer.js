import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/qq.png";
import navIcon2 from "../assets/img/wx.png";
import navIcon3 from "../assets/img/email.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>就算步筏很小，也要步步前进</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
