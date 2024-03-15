import { useEffect, useState } from "react";

const Cards = ({ id, image, title, description }) => {
  return (
    <section
      key={id}
      className="flex flex-col items-center w-80 bg-slate-50 text-slate-400 rounded-md shadow-xl"
    >
      <img
        src={require(`${image}`)}
        alt={title}
        className="rounded-md mb-7 max-h-52"
      />
      <h3 className="text-slate-800 mb-7">{title}</h3>
      <p className="text-gray-600 mb-7">{description}</p>
      <div className="flex w-full items-center justify-end">
        <button onClick={() => console.log("Open article")}>
          Read more {` -->`}
        </button>
      </div>
    </section>
  );
};

const App = ({ props }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props && props.cards) {
      setCards(props.cards);
      setLoading(false);
    } else if (Array.isArray(props)) {
      setCards(props);
      setLoading(false);
    }
  }, [props]);

  return (
    <article className="flex flex-row flex-wrap gap-10">
      {loading ? (
        <p>Loading...</p>
      ) : cards.length ? (
        cards.map((card) => (
          <Cards
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))
      ) : (
        <p>No cards found in the database.</p>
      )}
    </article>
  );
};
export default App;
