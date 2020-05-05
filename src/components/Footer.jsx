import React from "react";
import "../assets/css/Footer.css";
import phone from "../assets/img/phone.png";
import home from "../assets/img/home.png";
import mail from "../assets/img/mail.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="card-container">

        <div className="info-cards">
          <img alt="marcyfood" src={phone} />
          <p><span>Horario<br/>Lun-Sab 9am-9pm </span><br/>+56 9 4855 5912</p>
        </div>

        <div className="info-cards">
          <img alt="marcyfood" src={mail} />
          <p><span>Email <br/>24/7 Soporte Online</span><br/>marvarasr@gmail.com</p>
        </div>

        <div className="info-cards">
          <img alt="marcyfood" src={home} />
          <p><span>Santiago - Chile</span><br/>Roberto Espinoza 669</p>
        </div>

      </div>
      <div className="copyright">
      2020 © Marcy Foods. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
