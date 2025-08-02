async function fetchJSON(jsonFile) {
    try {
      const response = await fetch(jsonFile);
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading JSON file:', error);
      return false;
    }
}
