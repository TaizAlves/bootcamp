const overlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")
const maxiModal = document.querySelector(".maximize-modal")
const modal = document.querySelector(".modal")

for (let card of cards){
    card.addEventListener("click", function() {
        const url = card.getAttribute("id")
        overlay.classList.add('active')
        overlay.querySelector("iframe").src = `https://rocketseat.com.br/${url}`
    })

}

document.querySelector('.close-modal').addEventListener("click", function() {
    overlay.classList.remove('active')
    overlay.querySelector("iframe").src = ""
    modal.classList.remove("max")
    
})

maxiModal.addEventListener("click", function(){
    if(modal.classList.contains("max") == false){
        modal.classList.add("max")
        
    }
    else {
        modal.classList.remove("max")
        
    }
})

/*
const modaloverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
// const maximodal= document.querySelector('.maximize-modal')
// const modal = document.querySelector('.modal')


for (let card of cards){
    card.addEventListener("click", function(){
        const page= card.getAttribute("id")
        modaloverlay.classList.add('active')
        modaloverlay.querySelector("iframe").src = `https://rocketseat.com.br/${page}`
    })
}

document.querySelector(".close-modal"),addEventListener("click", function(){
    modaloverlay.classList.remove('active')
    modaloverlay.querySelector("iframe").src=""
    // modal.classList.remove("max")
    // maximodal.classList.remove('up')
})


maximodal.addEventListener("click", function(){
   if ( modal.classList.contains("max") == false) {
      modal.classList.add("max")
      maximodal.classList.add("max")
   }
   else{
       modal.classList.remove("max")
       maximodal.classList.remove("max")
   }
    
})
*/
