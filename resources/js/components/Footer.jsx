import React from "react";
import logo from '../../assets/images/logo.webp';

const Footer = () => {
  return (
    <footer className="footer-papa py-5" style={{backgroundColor: "rgb(234, 239, 234)"}}>
      <div className="container">

        <div className="row mb-4">
          <div className="col-md-3">
            <img src={logo} alt="Logo" style={{ height: '70px', cursor: 'pointer' }}/>

            <p>Síguenos en:</p>
            <div className="d-flex gap-3 fs-4">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-tiktok"></i>
            </div>
          </div>

          <div className="col-md-3">
            <h5>FAST FOOD RESTAURANT</h5>
            <ul className="footer-list">
              <li>Acerca de nosotros</li>
              <li>Ingredientes</li>
              <li>Nuestros locales</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>AYUDA</h5>
            <ul className="footer-list">
              <li>Preguntas frecuentes</li>
              <li>Contacto</li>
              <li>Teléfono +56 111 111 1111</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>LEGAL</h5>
            <ul className="footer-list">
              <li>Términos y Condiciones</li>
              <li>Política de privacidad</li>
              <li>Tratamiento de datos</li>
            </ul>
          </div>

        </div>

        <div className="text-center pt-4 border-top">
          © 2025 Fast Food Restaurant. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
