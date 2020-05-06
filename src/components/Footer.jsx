import React from "react";
import "../assets/css/Footer.css";
import phone from "../assets/img/phone.png";
import home from "../assets/img/home.png";
import mail from "../assets/img/mail.png";

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="card-container">

        <div className="info-cards">
        <a href="tel:+56948555912"><img alt="marcyfood" title='Hazme una llamada' src={phone} /></a>
          <p><span>Horario<br/>Lun-Sab 9am-9pm </span><br/>+56 9 4855 5912</p>
        </div>

        <div className="info-cards">
        <a href="mailto:marvarasr@gmail.com"><img alt="marcyfood" title='Mandame un correo' src={mail}/></a>
          <p><span>Email <br/>24/7 Soporte Online</span><br/>marvarasr@gmail.com</p>
        </div>

        <div className="info-cards">
          <a href="https://www.google.cl/maps/place/Roberto+Espinoza+669,+Santiago,+Regi%C3%B3n+Metropolitana/@-33.4540125,-70.6556477,17z/data=!3m1!4b1!4m5!3m4!1s0x9662c50ef1205f69:0x8c9304ba805fddd3!8m2!3d-33.454017!4d-70.653459"
             title="Ver la ubicación en google maps" target="blank"><img alt="marcyfood" src={home}/></a>
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
