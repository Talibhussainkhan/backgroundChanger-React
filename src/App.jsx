import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('white');
  
  return (
    <div className='w-full h-screen duration-500 bg-gray-200'
      style={{ backgroundColor: color }}>
      <div className='flex justify-center p-3 text-center'>
        <div className=' flex flex-wrap justify-center p-2  text-black gap-4 items-center rounded-lg' 
        style={{background:color}} >
          <button className='p-2 bg-red-500 rounded-full px-6'
          onClick={()=> setColor('red')}>Red</button>
          <button className='p-2 bg-green-500 rounded-full px-6' 
          onClick={()=> setColor('green')}>Green</button>
          <button className='p-2 bg-black text-white rounded-full px-6'
           onClick={()=> setColor('black')}  >Black</button>
          <button className='p-2 rounded-full px-6 border border-grey bg-white'
           onClick={()=> setColor('white')}>White</button>
          <button className='p-2 bg-blue-500 rounded-full px-6'
          onClick={()=> setColor('Blue')}>Blue</button>
          <button className='p-2 bg-gray-500 rounded-full px-6 border border-grey'
          onClick={()=> setColor('gray')}>Gray</button>
        </div>
      </div>

    </div>
  )
}

export default App;
