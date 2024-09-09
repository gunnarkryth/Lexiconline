import { useState } from "react";
import { CutOut } from "../components/CutOut/CutOut";
import s from "../assets/styles/Page.module.scss";

export const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  async function fetchData() {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
    const res = await fetch(url);
    const result = await res.json();
    setData(result[0]); // Resultatet er en liste, så vi tager det første element
  }

  function handleSynonymClick(synonym) {
    setInput(synonym);
    fetchData();
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
          <button onClick={fetchData}>Search</button>
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

            {/* Definitions */}
            {data.meanings && data.meanings.length > 0 && (
              <div className={s.definitions}>
                <h4>Definitions</h4>
                {data.meanings.map((meaning, idx) => (
                  <div key={idx}>
                    <p><strong>{meaning.partOfSpeech}:</strong></p>
                    {meaning.definitions.map((definition, defIdx) => (
                      <div key={defIdx}>
                        <p>{definition.definition}</p>
                        {definition.example && <p><em>Example:</em> {definition.example}</p>}
                        
                        {/* Synonyms */}
                        {definition.synonyms && definition.synonyms.length > 0 && (
                          <p>
                            <strong>Synonyms:</strong> {definition.synonyms.map((synonym, synIdx) => (
                              <span
                                key={synIdx}
                                className={s.synonym}
                                onClick={() => handleSynonymClick(synonym)}
                                style={{ cursor: "pointer", color: "blue" }}
                              >
                                {synonym}
                              </span>
                            ))}
                          </p>
                        )}

                        {/* Antonyms */}
                        {definition.antonyms && definition.antonyms.length > 0 && (
                          <p>
                            <strong>Antonyms:</strong> {definition.antonyms.map((antonym, antIdx) => (
                              <span
                                key={antIdx}
                                className={s.antonym}
                                onClick={() => handleSynonymClick(antonym)}
                                style={{ cursor: "pointer", color: "blue" }}
                              >
                                {antonym}
                              </span>
                            ))}
                          </p>
                        )}
                      </div>
                    ))}
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
