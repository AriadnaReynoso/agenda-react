import React, { useState, useEffect } from "react";

function agenda() {
    return (
      <div className="principal">
        <AgregarContacto />
        <div className="titulo">Listado</div>
        <ListaContactos />
      </div>
    );
  }

export default agenda;




