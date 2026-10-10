const fs = require("fs");

fs.appendFile("student.txt", "\nWelcome to Node.js!", (err) => {
    if (err) {
        console.log("Error updating file:", err);
        return;
    }
    console.log("File updated successfully!");
});