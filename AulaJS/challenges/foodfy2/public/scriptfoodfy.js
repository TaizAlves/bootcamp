const recipes = document.querySelectorAll(".recipe");


for (let recipe of recipes){
    recipe.addEventListener("click", function(){
        const recipeId= recipe.getAttribute("id")
        window.location.href = `/receitas/${recipeId}`
    })      
}


const showhide = document.getElementsByClassName("top")


for (let button of showhide){
    const buttonshowhide = querySelector("button")

    buttonshowhide.addEventListener("click", function(){
        if (buttonshowhide.innerHTML == "esconder"){
            button.querySelector(".content_detail").classList.add('hidden')
            buttonshowhide.innerHTML = "mostrar"
        }
        else {
            buttonshowhide.querySelector(".content_detail").classList.remove('hidden')
            buttonshowhide.innerHTML = "esconder"
        }

        if (buttonSpan.innerHTML == "ESCONDER") {
            showHide.querySelector('.topic-content').classList.add('hidden');
            buttonSpan.innerHTML = "MOSTRAR"   
          } else {
            showHide.querySelector('.topic-content').classList.remove('hidden');
            buttonSpan.innerHTML = "ESCONDER"
          }
    })
}





/*  1fase= com modal

const modalover = document.querySelector(".modal-over");
const recipes = document.querySelectorAll(".recipe")

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

*/
