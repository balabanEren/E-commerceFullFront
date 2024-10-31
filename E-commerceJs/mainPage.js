let allSlides=document.querySelectorAll(".slides .slide")
let currentSlideİndex=0
let forwardSlide=document.querySelector(".forwardSlide")
let backSlide=document.querySelector(".backSlide")
///
let pageElavator=document.getElementById("pageElavator")



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    })
}

pageElavator.addEventListener("click",scrollToTop)


function SlideTrigger(){
    allSlides[currentSlideİndex].classList.add("display")
    setInterval(slideAuto,3000)
}

function slideAuto(){

    allSlides[currentSlideİndex].classList.remove("display")
    currentSlideİndex++
        if(currentSlideİndex>=allSlides.length){
            currentSlideİndex=0
        }
        allSlides[currentSlideİndex].classList.add("display")
}


forwardSlide.addEventListener("click",()=>{
    slideAuto();
})

///

backSlide.addEventListener("click",()=>{
    
   
    
    allSlides[currentSlideİndex].classList.remove("display");
    currentSlideİndex--;
 
    if (currentSlideİndex < 0) {
        currentSlideİndex = allSlides.length - 1; 
        console.log("0 da")
    }
 
    allSlides[currentSlideİndex].classList.add("display");
})


SlideTrigger()
setInterval(slideAuto,4000)


