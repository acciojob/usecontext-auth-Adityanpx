// App.js
import React, { createContext, useState } from "react";
import './../styles/App.css';
import AuthContext from "./AuthContext";

export const DataContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <DataContext.Provider value={isAuthenticated ? "You are Authenticated ✅, you can proceed" : "You are not Authenticated ❌"}>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        
        <p style={{
          color: "blue", 
          fontSize: "18px", 
          fontWeight: "bold",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "5px"
        }}>
          Click on the Checkbox to get authenticated
        </p>

        {/* Auth Status Display */}
        <AuthContext />

        {/* Checkbox for authentication */}
        <input
          type="checkbox"
          id="authCheckbox"
          checked={isAuthenticated}
          onChange={() => setIsAuthenticated(!isAuthenticated)}
        />
        <label htmlFor="authCheckbox" >
          I'm mot robot
        </label>
      </div>
    </DataContext.Provider>
  );
};

export default App;
