import React from 'react';

function App() {
  const phoneNumber = '677116137'; // 
  const message = 'Hola, ¿cómo estás?';
  
  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  return (
    <div>
      <button onClick={openWhatsApp}>Abrir WhatsApp</button>
    </div>
  );
}

export default App;





