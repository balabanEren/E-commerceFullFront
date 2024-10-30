
const scriptPath = document.currentScript.src;
const scriptDir = scriptPath.substring(0, scriptPath.lastIndexOf('/'));
//console.log(scriptDir)

 //  Function to load HTML content
   function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load navigation and footer
loadHTML('nav', `${scriptDir}/nav.html`);