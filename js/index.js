
var imgs = Array.from(document.getElementsByClassName("img-item")) 
var lightBoxContainer = document.getElementById("lightbox-container")
var lightBoxItem = document.getElementById("lightboxItem")
var closeBtn = document.getElementById("close")
var nextBtn = document.getElementById("next") 
var prevBtn = document.getElementById("prev")
var currentSlideIndex = 0

for(var i=0 ; i < imgs.length ; i++){
    imgs[i].addEventListener("click" , openLightBox)
 }
 //open
 function openLightBox(eventInfo){
    var imgSrc = eventInfo.target.src // ماسك المسار بتاع الصورة
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
    currentSlideIndex = imgs.indexOf(eventInfo.target)
     lightBoxContainer.style.display = "flex" 
 }
//next
nextBtn.addEventListener("click" ,nextSlide )
function nextSlide(){
    currentSlideIndex++
    if( currentSlideIndex >= imgs.length){
        currentSlideIndex = 0
    }
    var imgSrc =  imgs[currentSlideIndex].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}
//prev 
prevBtn.addEventListener("click" ,prevSlide )
function prevSlide(){
    currentSlideIndex--
    if( currentSlideIndex < 0 ){
        currentSlideIndex = imgs.length -1
    }
    var imgSrc =  imgs[currentSlideIndex].src
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}

//close
closeBtn.addEventListener("click" , closeLightBox )
function closeLightBox(){
    lightBoxContainer.style.display = "none" 
}

document.addEventListener("keydown" , function(e){
   if(e.keyCode == 39) {
    nextSlide()
   }
   else if (e.keyCode == 37){
    prevSlide()
   }
   else if (e.keyCode == 27){
    closeLightBox()
   }
} )
  
















































//  let imgs = document.getElementsByClassName("img-item") ;
//  let lightBoxContainer = document.getElementById("lightbox-container")  
//  let lightBoxItem = document.getElementById("lightboxItem")
//  let prevBtn = document.getElementById("prev")
//  let nextBtn = document.getElementById("next")
//  let closeBtn = document.getElementById("close")
//  let currentSlideIndex = 0 ;
// //
//  for (let i = 0  ; i < imgs.length ; i++){
//       imgs[i].addEventListener ('click' , openLightBox )

//  }

//  function openLightBox(eventInfo) {
//     let imgSrc =  eventInfo.target.src //////src bta3 ay sora
//     lightBoxContainer.style.display = 'flex'
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`
//  }
//  // next 
//  nextBtn.addEventListener ('click' ,  nextSlide)
//  function nextSlide(){
//     currentSlideIndex++  // 5
//    // console.log(currentSlideIndex)
//    if (currentSlideIndex == imgs.length){
//         currentSlideIndex = 0
//     }
//     let imgSrc =  imgs[currentSlideIndex].src
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`

//  }
// // prev
// prevBtn.addEventListener('click' , prevSlide)

// function prevSlide(){
//     currentSlideIndex--
//    if ( currentSlideIndex < 0 ){
//        currentSlideIndex = imgs.length-1
//    }
//    let imgSrc =  imgs[currentSlideIndex].src
//    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
//  }

//  // close
//  closeBtn.addEventListener('click' , closeLightBox)
//  function closeLightBox(){
//     lightBoxContainer.style.display = 'none'
//  }
 
//  document.addEventListener("keydown" , function(eventInfo){
       
//     if (eventInfo.keyCode == 39) {
//         nextSlide()
//     }
//     if (eventInfo.keyCode == 37) {
//         prevSlide()
//     }
//     if (eventInfo.keyCode == 27) {
//         closeLightBox()
//     }
//  } )












 