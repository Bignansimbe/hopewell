"use client";

// components/SearchInput.js
import React, { useState } from "react";
import styles from "./componentStyles/searchInput.module.css";


// Define the SearchInput component
const SearchInput = ({ onSubmit }) => {
    // Declare a state variable to store the input value
    const [inputValue, setInputValue] = useState("");
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      onSubmit(inputValue); // Call the onSubmit function passed as a prop with the input value
      setInputValue(""); // Clear the input field after submission
    };
  
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Input field to capture user input */}
        <input
          className={styles.input}
          type="text"
          value={inputValue} // Bind the input value to the state variable
          onChange={(e) => setInputValue(e.target.value)} // Update the state variable on input change
          placeholder="input id..." // Placeholder text for the input field
        />
        {/* Submit button */}
        <button className={styles.button} type="submit">Submit</button>
      </form>
    );
  };
  
  // Export the SearchInput component as the default export
  export default SearchInput;