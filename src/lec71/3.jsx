import { useState } from 'react';

const ToggleTextVisibility = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter text" 
        onChange={(e) => setText(e.target.value)} 
      />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>{text}</p>}
    </div>
  );
};

export default ToggleTextVisibility;
