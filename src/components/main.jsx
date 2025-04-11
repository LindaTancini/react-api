// IMPORTAZIONI
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

// PRENDO LE API E LE METTO DENTRO UNA VARIABILE ENDPOINT
const endpoint = "https://www.freetestapi.com/api/v1/actresses";

// FUNZIONE CHE COMPRENDE IL COMPONENTE MAIN
function Main() {
  // CREO VARIABILE USE STATE
  const [actresses, setActresses] = useState([]);
  // USO USE EFFECT PER CHIAMARE LA FUNZIONE E STAMPARE IN CONSOLE IL RISULTATO DELLA CHIAMATA API
  useEffect(() => {
    loadActress();
  }, []);
  // CREO FUNZIONE PER CARICARE LE API
  function loadActress() {
    axios.get(endpoint).then((result) => {
      setActresses(result.data);
      console.log("Ho chiamato le API:", result.data);
    });
  }

  return (
    <div>
      <h1>Lista Attrici</h1>
      {/*ITINERO CON MAP PER CERCARE I DATI DELLE ATTRICI E CREARCI UNA CARD*/}
      {actresses.map((actress) => (
        <Card
          key={actress.id}
          nome={actress.name}
          annoNascita={actress.birth_year}
          nazionalità={actress.nationality}
          biografia={actress.biography}
          riconoscimenti={actress.awards}
          immagine={actress.image}
        />
      ))}
    </div>
  );
}

// ESPORTAZIONI
export default Main;
