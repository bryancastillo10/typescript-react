import React, { FC, createContext } from "react";

import "./App.css";
import { Person, Requests } from "./components/Person";

// const getName = (name: string): number | string => {
//   if (name === "Bryan") {
//     return age;
//   } else {
//     return "Invalid age";
//   }
// };

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const NewContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Juan",
    age: 20,
    country: "Philippines",
  };

  return (
    <NewContext.Provider value={contextValue}>
      <div className="container">
        <Person name="Bryan" age={25} requests={Requests.Success} />
      </div>
    </NewContext.Provider>
  );
};

export default App;
