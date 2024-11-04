// footer.js
const scriptPath = document.currentScript.src;
const scriptFooter = scriptPath.substring(0, scriptPath.lastIndexOf('/'));

function loadFooter(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                console.error(`Error loading ${filePath}: ${response.status} ${response.statusText}`);
                return; // Hata durumunda işlemi durdur
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading HTML: ${error}`);
        });
}

loadFooter('footer', `${scriptFooter}/footer.html`);
console.log(scriptPath)