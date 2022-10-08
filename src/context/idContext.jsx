import { createContext, useState } from "react";

export const IdContext = createContext();

export function IdContextProvider({ children }) {
  const [movieIDs, setMovieIDs] = useState([]);

  return (
    <IdContext.Provider value={{ movieIDs, setMovieIDs }}>
      {children}
    </IdContext.Provider>
  );
}
