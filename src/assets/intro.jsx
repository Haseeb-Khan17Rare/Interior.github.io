import { useState } from "react";

function Intro() {
  const [text, setText] = useState("");  // Initialize with an empty string
  const [words, setWords] = useState(0); // Initialize with 0 since it's a word count
  const [vowels, setVowels] = useState(0); // Initialize vowels count

  function toUpperCase() {
    setText((prevText) => prevText.toUpperCase());
  }

  function toLowerCase() {
    setText((prevText) => prevText.toLowerCase());
  }

  function countWords() {
    // Split text by spaces and count the number of words
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    setWords(wordCount);
  }

  function countVowels() {
    // Convert the text to lowercase to handle both uppercase and lowercase vowels
    const textLower = text.toLowerCase();
    let vowelsCount = 0;

    // Iterate through the text and count vowels
    for (let char of textLower) {
      if (["a", "e", "i", "o", "u"].includes(char)) {
        vowelsCount++;
      }
    }

    // Update the state with the number of vowels
    setVowels(vowelsCount);
  }

  return (
    <>
      <div className="w-screen h-screen hover:bg-green-800 border-white 
  flex flex-col items-center ">
        <h1 className="text-center text-4xl font-semibold mb-3 hover:text-white cursor-zoom-out">TEXUTILS</h1>
        <textarea
          id="textarea"
          placeholder="ENTER YOUR TEXT HERE "
          value={text}
          onChange={(e) => setText(e.target.value)} // Make the textarea value controlled
          className="w-[60vw] h-[30vh] resize border rounded-md placeholder:text-center focus:placeholder-white text-white decoration-from-font bg-teal-900"
        />
        <div className="mt-2 text-lg font-semibold hover:text-white cursor-zoom-in">
          Word Count: {words} | Vowels: {vowels}
        </div>
        <div className="flex justify-around gap-x-3 mt-3">
          <button
            onClick={toUpperCase}
            className="bg-blue-400 rounded-sm text-white w-[120px] h-[30px] tracking-wide hover:bg-white hover:text-blue-400"
          >
            To Uppercase
          </button>
          <button
            onClick={toLowerCase}
            className="bg-blue-400 rounded-sm text-white w-[120px] h-[30px] tracking-wide hover:bg-white  hover:text-blue-400"
          >
            To Lowercase
          </button>
          <button
            onClick={countWords}
            className="bg-blue-400 rounded-sm text-white w-[120px] h-[30px] tracking-wide hover:bg-white hover:text-blue-400"
          >
            Count Words
          </button>
          <button
            onClick={countVowels}
            className="bg-blue-400 rounded-sm text-white w-[120px] h-[30px] tracking-wide hover:bg-white hover:text-blue-400"
          >
            Count Vowels
          </button>
        </div>
      </div>
    </>
  );
}

export default Intro;