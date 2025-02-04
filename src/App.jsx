import { useState } from "react";
import Button from "./components/Button.jsx";
import Result from "./components/Result.jsx";
import NameList from "./components/NameList.jsx";
import "./App.css";

function App() {
  const [nombres, setNombres] = useState([]);
  const [resultado, setResultado] = useState("");
  const [inputValue, setInputValue] = useState("");

  const agregarNombre = () => {
    if (inputValue.trim() && nombres.length < 10 && !nombres.includes(inputValue)) {
      setNombres([...nombres, inputValue.trim()]);
      setInputValue(""); 
    }
  };

  
  const manejarEnter = (e) => {
    if (e.key === "Enter") {
      agregarNombre();
    }
  };

  const sortearAmigo = () => {
    if (nombres.length > 1) {
      const indice = Math.floor(Math.random() * nombres.length);
      setResultado(`🎉 El amigo secreto es: ${nombres[indice]}! 🎁`);
    }
  };

  const reiniciarJuego = () => {
    setNombres([]);
    setResultado("");
  };

  return (
    <div className="container">
      <h1>Juego Amigo Secreto</h1>
      <input
        type="text"
        placeholder="Ingresa un nombre"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={manejarEnter} 
      />
      <Button onClick={agregarNombre} text="Agregar" />
      <NameList nombres={nombres} />
      <Button onClick={sortearAmigo} text="Sortear" disabled={nombres.length < 2} />
      <Button onClick={reiniciarJuego} text="Reiniciar" />
      <Result resultado={resultado} />
    </div>
  );
}

export default App;
