import React from "react";

const Subscription = () => {

  return (
    <div className="py-5" style={{ background: "#fff6ee" }}>
      <div className="container text-center">
        
        <h3 className="text-center mb-4">¡Obtén un 10% de descuento!</h3>
        <p className="mb-4" style={{ color: "#555" }}>
          Suscríbete para recibir promociones exclusivas y novedades.
        </p>

        <form 
          className="d-flex justify-content-center gap-2 flex-wrap"
        >
          <input
            type="email"
            className="form-control"
            placeholder="Tu correo electrónico"
            required
            style={{
              maxWidth: "360px",
              padding: "12px 16px",
              borderRadius: "8px"
            }}
          />

          <button 
            type="submit" 
            className="btn text-white"
            style={{
              background: "rgb(249, 124, 47)",
              padding: "12px 20px",
              borderRadius: "8px",
              fontWeight: "bold"
            }}
          >
            Suscribirme
          </button>
        </form>

      </div>
    </div>
  );
};

export default Subscription;
