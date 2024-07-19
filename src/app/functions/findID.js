export default function findId(id, List) {
    for (let i = 0; i < List.length; i++) {
        if (List[i].patient_id === id) {
            return List[i];
        }
    }
    return null; // Return null if no patient with the given ID is found
}