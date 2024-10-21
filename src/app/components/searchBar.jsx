import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./componentStyles/searchBar.module.css";
import { searchPatients } from "../redux/slices/patientSlice";

const SearchComponent = (props) => {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Access patients data from the Redux store
  const allPatients = useSelector((state) => state.patients.patientsList);
  const searchPatientsList = useSelector(
    (state) => state.patients.searchPatientsList
  );

  // Dispatch actions to update the search results
  const dispatch = useDispatch();

  // Display the search results while typing
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      dispatch(searchPatients(searchTerm));
    } else {
      // Clear search results when searchTerm is empty
      dispatch(searchPatients("")); // You can pass an empty string or handle this in your reducer
    }
  }, [dispatch, searchTerm]);

  // Handle search logic
  const handleSearch = () => {
    dispatch(searchPatients(searchTerm));
  };

 

  // Highlight the search term
  const highlightSearchTerm = (text, term) => {
    const regex = new RegExp(term, "gi");
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  return (
    <div className={styles.card}>
    <div className={styles.inputCard}>
        <input
            className={styles.input}
            type="text"
            placeholder={props.placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Search button */}
        {/*<button onClick={handleSearch}>Search</button>*/}
    </div>
    {/* Input field for search */}
    {/* Display search results or message */}
    <div className={styles.displaySearch}>
        {searchPatientsList.length > 0 ? (
            <ul>
                {searchPatientsList.map((patient) => (
                    <li
                        key={patient.patient_ID}
                        dangerouslySetInnerHTML={{
                            __html: highlightSearchTerm(
                                `${patient.patient_ID} ${patient.first_name} ${patient.last_name} ${patient.telephone}`,
                                searchTerm
                            ),
                        }}
                    />
                ))}
            </ul>
        ) : (
            <p></p>
        )}
    </div>
</div>

  );
};

export default SearchComponent;
