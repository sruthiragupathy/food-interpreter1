import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🧀": "Cheese Wedge",
  "🌮": "Taco",
  "🍣": "Sushi",
  "🥟": "Dumpling",
  "🍩": "Doughnut",
  "🎂": "Birthday Cake",
  "🥧": "Pie",
  "🍪": "Cookie",
  "🍮": "Cheese"
};

const emojiList = Object.keys(emojiDictionary);
export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    const emoji = event.target.value;
    setEmoji(emoji);
    var meaning = emojiDictionary[emoji];
    if (meaning === undefined) {
      meaning = "Sorry, We don't have this emoji in our database.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    setEmoji(emoji);

    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Food Emoji Interpreter</h1>
      <input
        className="App-input"
        placeholder="Enter an emoji here...."
        value={emoji}
        onChange={emojiInputHandler}
      />
      <p className="quote">
        <q>You are what you eat!</q>
      </p>
      <p>Click the food emojis below and find out what they mean!</p>
      <div className="App-div">
        {emojiList.map((emoji, index) => {
          return (
            <span
              key={emoji}
              className="App-span"
              onClick={() => {
                emojiClickHandler(emoji);
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <p style={{ marginBlockEnd: "0.7em" }}>
        Find out the meaning here<span role="emoji">👇</span>!
      </p>
      <div className="ans">{meaning} </div>
    </div>
  );
}
