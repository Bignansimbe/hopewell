import axios from 'axios';



export default function patientDetails () {
    const fetchData = async()=>{
      try {
        const response = await axios.get("http://localhost:3000/patients");
        //console.log("Response data:", response.data);
       return response.data
        // Handle the response data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData()
        


      
      
      
}