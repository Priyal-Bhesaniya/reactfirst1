import { useState } from 'react';

function SetExample2() {
  const [name, setName] = useState("Ptiyal");
  const [age , setAge] = useState(50);

  return (
    <div>
      <h1>{name}</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <h1>{age}</h1>
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(Number(e.target.value))}
      />
    </div>

    
  );
}

export default SetExample2;
