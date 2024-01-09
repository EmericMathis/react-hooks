import { useReducer, useEffect, useState } from "react";
import counterReducer from "./CounterReducer";
import gunther from "../../trucs/gunther.gif";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const [tralala, setTralala] = useState(false);

  useEffect(() => {
    {
      state.count >= 20 ? setTralala(true) : setTralala(false);
    }
  }, [state.count]);
  return (
    <div className="composant">
      <h1>INCREMENTATOR3000</h1>
      <hr />
      <h2>Gunther: {state.count}</h2>
      <h3>Tralala = 20</h3>

      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        + 1
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        - 1
      </button>
      {tralala && (
        <>
          <p>you touch my tralala</p>
          <img src={gunther} className="gif" />
          {/*<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PTvTLvkiAbI?si=3Yhi71dqYR77InVj&amp;controls=0&amp;start=23&amp;autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
      ></iframe>*/}
        </>
      )}
    </div>
  );
};

export default Counter;
