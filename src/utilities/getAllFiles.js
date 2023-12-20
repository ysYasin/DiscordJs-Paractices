const fs = require('fs');
const path = require('path');
module.exports = function (directory, onlyFolder = false) {
    const fileName = [];

    // Read The Directory
    const files = fs.readdirSync(directory, { withFileTypes: true })
    for (let file of files) {
        const filePath = path.join(directory, file.name)

        if (onlyFolder) {
            if (file.isDirectory()) {
                fileName.push(filePath)
            }
        }
        else {
            if (file.isFile()) {
                fileName.push(filePath)
            }
        }
    }
    return fileName;
}