import React, { useState, useEffect } from "react";

const Result = ({ resultado }) => {
  const [showGlobos, setShowGlobos] = useState(false);

  
  useEffect(() => {
    if (resultado) {
      setShowGlobos(true);

      
      setTimeout(() => {
        setShowGlobos(false);
      }, 3000); 
    }
  }, [resultado]);

  return (
    <div className="result-container">
      {resultado && (
        <>
          <h2>{resultado}</h2>
          
          {showGlobos && (
            <img
              src={`${import.meta.env.BASE_URL}globos.gif`} 
              alt="Celebración"
              className="globos show"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Result;

