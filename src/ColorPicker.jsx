import { useState } from 'react';
import './ColorPicker.css';

function ColorPicker() {
  const [color, setColor] = useState('#ff0000');

  const handleReset = () => {
    setColor('#ff0000');
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={handleReset}>Reset</button>
      <div className="preview" style={{ backgroundColor: color }}></div>
      <p>Selected Color: {color}</p>
    </div>
  );
}

export default ColorPicker;