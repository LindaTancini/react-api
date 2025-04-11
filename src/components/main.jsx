// IMPORTAZIONI
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

// PRENDO LE API DELLE ATTRICI E LE METTO DENTRO UNA VARIABILE ENDPOINT
const endpointActress = "https://www.freetestapi.com/api/v1/actresses";
// PRENDO LE API DEGLI ATTORI E LE METTO DENTRO UNA VARIABILE ENDPOINT
const endpointActors = "https://www.freetestapi.com/api/v1/actors";

// FUNZIONE CHE COMPRENDE IL COMPONENTE MAIN
function Main() {
  // CREO VARIABILI USE STATE PER LE ATTRICI E GLI ATTORI
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  // USO USE EFFECT PER CHIAMARE LE FUNZIONI E STAMPARE IN CONSOLE IL RISULTATO DELLE CHIAMATE API
  useEffect(() => {
    loadActress();
    loadActors();
  }, []);
  // CREO FUNZIONE PER CARICARE LE API DELLE ATTRICI
  function loadActress() {
    axios.get(endpointActress).then((result) => {
      setActresses(result.data);
      console.log("Ho chiamato le API delle ATTRICI:", result.data);
    });
  }
  //CREO FUNZIONE PER CARICARE LE API DEGLI ATTORI
  function loadActors() {
    axios.get(endpointActors).then((result) => {
      setActors(result.data);
      console.log("Ho chiamato le API degli ATTORI:", result.data);
    });
  }
  return (
    <>
      {/* ATTRICI */}
      <div className="container mt-5">
        <h1 className="mb-4">Lista Attrici</h1>
        {/* ITERO CON MAP PER CERCARE I DATI DELLE ATTRICI E CREARCI UNA CARD */}
        <div className="row">
          {actresses.map((actress) => (
            <div className="col-4 mb-4" key={actress.id}>
              <Card
                nome={actress.name}
                annoNascita={actress.birth_year}
                nazionalità={actress.nationality}
                biografia={actress.biography}
                riconoscimenti={actress.awards}
                immagine={actress.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ATTORI */}
      <div className="container mt-5">
        <h1 className="mb-4">Lista Attori</h1>
        {/* ITERO CON MAP PER CERCARE I DATI DEGLI ATTORI E CREARCI UNA CARD */}
        <div className="row">
          {actors.map((actor) => (
            <div className="col-4 mb-4" key={actor.id}>
              <Card
                nome={actor.name}
                annoNascita={actor.birth_year}
                nazionalità={actor.nationality}
                biografia={actor.biography}
                riconoscimenti={actor.awards}
                immagine={actor.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ESPORTAZIONI
export default Main;
