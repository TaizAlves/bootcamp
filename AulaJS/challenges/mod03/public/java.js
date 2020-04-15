const overlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")
const maxiModal = document.querySelector(".maximize-modal")
const modal = document.querySelector(".modal")

for (let card of cards){
    card.addEventListener("click", function() {
        const url = card.getAttribute("id")
        window.location.href = `courses/:id=${url} `
    })

}



/*  COM MODAL
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
*/
