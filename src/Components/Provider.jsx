import React, { useState } from "react";

export const Context = React.createContext();

const Provider = props => {

    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");

  
    return (
      <Context.Provider
        value={{
          name,
          updateName: name => setName(name),
          firstName,
          updateEssence: first => setFirstName(firstName)
         }}
      >
        {props.children}
      </Context.Provider>
    );
};
  
export default Provider;