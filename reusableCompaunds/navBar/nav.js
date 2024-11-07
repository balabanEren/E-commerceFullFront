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



loadNav('nav', `${scriptNav}/nav.html`)  

// nav lowPixel hamburger
// Dinamik olarak eklenen öğe için bir kontrol mekanizması kurabilirsiniz

function toggleNav(){
    let toggleBtn=document.querySelector(".toggle-btn")
    let lowPixelPageLinks=document.querySelector(".lowPixelPageLinks")
    toggleBtn.addEventListener("click",()=>{
        
    })
}



//


