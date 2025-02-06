import { useState } from "react";
import Button from "./components/Button.jsx";
import Result from "./components/Result.jsx";
import NameList from "./components/NameList.jsx";
import './App.css';  

function App() {
  const [nombres, setNombres] = useState([]);
  const [resultado, setResultado] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Función para agregar un nombre a la lista
  const agregarNombre = () => {
    // Eliminar espacios al principio y al final
    const nombre = inputValue.trim();

    // Validación para asegurar que el campo no esté vacío
    if (!nombre) {
      alert("Por favor, inserte el nombre.");
      return; // Si el campo está vacío, no se agrega el nombre
    }

    // Validación para asegurar que el nombre solo contiene letras y números
    const nombreValido = /^[a-zA-Z0-9]+$/.test(nombre);
    if (!nombreValido) {
      alert("El nombre solo debe contener letras y números.");
      return;
    }

    // Si el nombre es válido, se agrega a la lista
    if (nombres.length < 10 && !nombres.includes(nombre)) {
      setNombres([...nombres, nombre]);
      setInputValue(""); // Limpiar el campo de texto después de agregar el nombre
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
