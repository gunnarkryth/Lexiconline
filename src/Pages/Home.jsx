import { useState } from "react";
import { CutOut } from "../components/CutOut/CutOut";

import s from "../assets/styles/Page.module.scss";

export const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  async function fetchData() {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setData(data);
  }

  return (
    <>
      <CutOut className={s.CutOut} title="Enter a word to search for">
        <div className={s.searchContainer}>
          <input
            className={s.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={fetchData}>Button</button>
        </div>
        {data && (
          <div className={s.resultContainer}>
            <h2>{data.word}</h2>

            {/* Phonetics */}
            {data.phonetics && data.phonetics.length > 0 && (
              <div className={s.phonetics}>
                <h4>Pronunciation</h4>
                {data.phonetics.map((phonetic, idx) => (
                  <div key={idx}>
                    {phonetic.text && <p>{phonetic.text}</p>}
                    {phonetic.audio && (
                      <audio controls>
                        <source src={phonetic.audio} type="audio/mpeg" />
                        Your browser does not support this audio format.
                      </audio>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CutOut>
    </>
  );
};
