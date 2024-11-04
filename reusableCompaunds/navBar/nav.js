// nav.js
const scriptP = document.currentScript.src;
const scriptNav = scriptP.substring(0, scriptP.lastIndexOf('/'));

function loadNav(elementId, filePath) {
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

loadNav('nav', `${scriptNav}/nav.html`);
console.log(scriptPath)


// nav lowPixel hamburger



//
