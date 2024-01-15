import React, { useState } from 'react';
import './AllianceSizer.css'; // Arquivo de estilo CSS para estilização

const AllianceSizer = () => {
  const [measure, setMeasure] = useState(17.2);
  const [ppi, setPpi] = useState(160); // Ajuste este valor com base na densidade de pixels da tela

  const handleMeasureChange = (event) => {
    const newMeasure = parseFloat(event.target.value);
    setMeasure(newMeasure);
    console.log(`Medida da Aliança: ${newMeasure} mm`);
  };

  const pixelsPerMm = ppi / 25.4;
  const circleStyle = {
    width: `${measure * pixelsPerMm}px`,
    height: `${measure * pixelsPerMm}px`,
  };

  return (
    <div className='sizer'>
      <h2>Ajuste a medida da Aliança</h2>
      <input
        type="range"
        min="1"
        max="20"
        step="0.1"
        value={measure}
        onChange={handleMeasureChange}
      />
      <p>Medida Atual: {measure} mm</p>
      <div className="circle" style={circleStyle}></div>
    </div>
  );
};

export default AllianceSizer;
