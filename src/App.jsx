import { useState } from 'react'

import './App.css'

function App() {
 const [text , setText] = useState ('');
 const handleChange = (event) => {
    setText(event.target.value)
 };

  return (
    <div className='bg-white shadow-2xl'>
    <i><h1 className='text-5xl font-bold text-pink-600 m-8'>Character Count</h1></i>
    <input type="text" className='text-2xl text-blue-500 font-semibold border'
    value={text} 
    onChange={handleChange}
    placeholder='type something...'
    />
    <h2 className='text-3xl font-bold text-pink-600 mt-6'> Character Count : {text.length}</h2>
    <button className='bg-pink-600 text-white text-3xl font-bold rounded-md p-4 mt-6 shadow-md mb-4' onClick={handleChange}>remove text</button>
    </div>
  )
}

export default App
