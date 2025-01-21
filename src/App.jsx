import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="bg-white shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <i>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 m-4 sm:m-6 md:m-8">
          Character Count
        </h1>
      </i>
      <input
        type="text"
        className="text-lg sm:text-xl md:text-2xl text-blue-500 font-semibold border p-2 sm:p-3 md:p-4"
        value={text}
        onChange={handleChange}
        placeholder="type something..."
      />
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mt-4 sm:mt-6 md:mt-8">
        Character Count: {text.length}
      </h2>
      <button
        className="bg-pink-600 text-white text-xl sm:text-2xl md:text-3xl font-bold rounded-md p-3 sm:p-4 md:p-5 mt-4 shadow-md mb-4"
        onClick={() => setText('')}
      >
        Remove Text
      </button>
    </div>
  );
}

export default App;
