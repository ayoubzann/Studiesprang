export const preprocessAndParseJSON = (jsonString) => {
    try {
        // Remove occurrences of "```json" and "```" from the JSON string
       let sanitizedString = jsonString.replace(/^`{3}json/, '').replace(/`{3}$/, '');

        // Parse the sanitized JSON string
        const jsonData = JSON.parse(sanitizedString);

        // Iterate over each object in the array
        jsonData.forEach(obj => {
            // Iterate over each key-value pair in the object
            Object.keys(obj).forEach(key => {
                // Replace \" with ' in the value part of the key-value pair
                obj[key] = obj[key].replace(/\\"/g, "'");
            });
        });

        return jsonData;
    } catch (error) {
        // Log error message if parsing fails
        console.error("Failed to preprocess and parse JSON data:", error);
        console.error("Raw JSON data:", jsonString);
        return null;
    }
};
