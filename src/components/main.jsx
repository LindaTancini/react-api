// IMPORTAZIONI
import { useEffect, useState } from "react";
import axios from "axios";

// PRENDO LE API E LE METTO DENTRO UNA VARIABILE ENDPOINT
const endpoint = "https://www.freetestapi.com/api/v1/actresses";

// FUNZIONE CHE COMPRENDE IL COMPONENTE MAIN
function Main() {
  //USO USE EFFECT PER CHIAMARE LA FUNZIONE E STAMPARE IN CONSOLE IL RISULTATO DELLA CHIAMATA API
  useEffect(() => {
    loadActress();
  }, []);

  // CREO FUNZIONE PER CARICARE LE API
  function loadActress() {
    axios.get(endpoint).then((result) => {
      console.log("Ho chiamato le API:", result.data);
    });
  }

  return (
    <div>
      <h1>Lista Attrici</h1>
    </div>
  );
}

// ESPORTAZIONI
export default Main;
