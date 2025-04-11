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
    <div className="card">
      <img src={immagine} alt={nome} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{nome}</h2>
        <p className="card-text">{annoNascita}</p>
        <p className="card-text">{nazionalità}</p>
        <p className="card-text">{biografia}</p>
        <p className="card-text">{riconoscimenti}:</p>
      </div>
    </div>
  );
}

//ESPORTAZIONI
export default Card;
