 export default function getCurrentTimestamp() {
    const date = new Date();
    return date.toISOString().replace('T', ' ').replace(/\..+/, '') + '+00';
  }
  