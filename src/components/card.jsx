//CREO FUNZIONE CARD CHE COMPRENDE LA SUA STRUTTURA HTML
function Card({
  nome,
  annoNascita,
  nazionalità,
  biografia,
  riconoscimenti,
  immagine,
}) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{annoNascita}</p>
      <p>{nazionalità}</p>
      <p>{biografia}</p>
      <p>{riconoscimenti}:</p>
      <img src={immagine} alt={nome} />
    </div>
  );
}

//ESPORTAZIONI
export default Card;
