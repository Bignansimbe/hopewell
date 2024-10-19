// Import necessary dependencies
import React, { useState } from "react";
import styles from "./componentStyles/dropdown.module.css";
import Image from "next/image";

// Define the Dropdown component
const Dropdown = ({ options=['kwame', 'gideon', 'ama'], onSelect }) => {
  // Declare a state variable to store the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Handle change event for the dropdown
  const handleChange = (e) => {
    const value = e.target.value; // Get the selected value
    setSelectedOption(value); // Update the state with the selected value
    onSelect(value); // Call the onSelect function passed as a prop with the selected value
  };

  return (
    <div className={styles.dropdown}>
       <Image src="/icons/testube.png"
             width={20}
             height={20}
             alt="testube"
            /> 
      {/* Dropdown select element */}
      <select value={selectedOption} onChange={handleChange} className={styles.select}>
      
        <option value="" disabled>
            Lab results</option>
        {/* Map through the options array to create option elements */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

// Export the Dropdown component as the default export
export default Dropdown;
