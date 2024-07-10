// Generate a unique ID with the prefix "HMPID" and 6 characters
export default function generateId() {
    // Create a random number (between 1000 and 9999)
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
  
    // Combine prefix and random number
    const hmpid = `HMPID${randomNum}`;
  
    return hmpid;

    
}