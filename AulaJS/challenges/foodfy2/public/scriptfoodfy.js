const modalover = document.querySelector(".modal-over");
const recipes = document.querySelectorAll(".recipe");

for (let recipe of recipes){
    recipe.addEventListener("click", function(){
        const img = recipe.getAttribute("id")
        const txt = recipe.querySelector("h2").innerHTML
        const autor = recipe.querySelector("p").innerHTML
        modalover.classList.add('active')
        modalover.querySelector("img").src = `${img}`
        modalover.querySelector("h2").innerHTML = `${txt}`
        modalover.querySelector("p").innerHTML= `${autor}`
        
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalover.classList.remove('active')
})


