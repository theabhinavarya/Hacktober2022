import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "1. 🌹=👀": "Gulabi aankhen, jo teri dekhi",
  "2. ❓🚶‍♀️+🦚": "Kithe chali aen, morni banke, morni banke",
  "3. 🙋♂️👆+👫": "Main tera boyfriend, tu meri girlfriend",
  "4. 👆🚪+♥🔔": "Tune maari entriyaan, dil mein baji ghantiyaan",
  "5. 👂👆+😭👇": "Sun raha hai na tu, ro raha hu main",
  "6. 👵👴+🆙💃": "Aunti ji Aunti ji Get up and Dance ",
  "7. ☀🌆+🌑🔥": "Suraj hua maddham, chaand jalne laga",
  "8. 🚂😙🎶":"Engine ki seeti mai maro maan dole",
  "9. 👞🎌":"Mera Jhoota hai japani",
  "10. 👽🍻":"Jadu hai naasha hai"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState();

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database ";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>SONG INTERPRETER</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer", }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
