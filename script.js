function updateFileList() {
  fetch('files.json')
    .then(response => response.json())
    .then(fileList => {
      // Get the list of files in the folder
      fetch('/listFolder')
        .then(response => response.json())
        .then(folderList => {
          const addedFiles = folderList.filter(file => !fileList.some(existingFile => existingFile.name === file.name));
          if (addedFiles.length > 0) {
            const updatedFileList = [...fileList, ...addedFiles];
            // Write the updated file list back to files.json
            fetch('files.json', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(updatedFileList)
            });
          }
        });
    });
}

// Update the file list every 5 seconds
setInterval(updateFileList, 5000);
