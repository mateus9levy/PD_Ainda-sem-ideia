import { createContext, useContext, useState } from 'react';
const OutputCardData = createContext();

export const OutputCardProvider = ({ children }) => {
  const [outputCardData, setOutputCardData] = useState({ loaded: false });
  
  return (
    <OutputCardData.Provider value={{ outputCardData, setOutputCardData }}>
      {children}
    </OutputCardData.Provider>
  );
};

export const useOutputCardData = () => {
  const { outputCardData, setOutputCardData } = useContext(OutputCardData);

  return { outputCardData, setOutputCardData };
};
