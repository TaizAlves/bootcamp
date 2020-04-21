const recipes = document.querySelectorAll(".recipe");


for (let recipe of recipes){
    recipe.addEventListener("click", function(){
        const recipeId= recipe.getAttribute("id")
        window.location.href = `/receitas/${recipeId}`      
    })      
}

const top = querySelector(".top")
const showhide = querySelector("button")

    showhide.addEventListener("click", function(){
        if (showhide.innerHTML == "esconder"){
            top.querySelector("#content_detail").classList.add('hide')
            showhide.innerHTML = "mostrar"
        }
        else {
            showhide.querySelector("#content_detail").classList.remove('hide')
            showhide.innerHTML = "esconder"
        }

        if (showhide.innerHTML == "esconder") {
            top.querySelector("#content_detail").classList.add('hide');
            showhide.innerHTML = "mostrar"   
          } else {
            top.querySelector("#content_detail").classList.remove('hide');
            showhide.innerHTML = "esconder"
          }
    }) 





/*const button = document.querySelector("button")

button.addEventListener("click", function() {
    document.querySelector(".content_detail").classList.toggle("hide")
    button.innerHTML = 'esconder'
    
})




    


/*
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
    
    TESTE TOGGLE()
    function showhide(){
    document.querySelector("#content_detail")
    .classList
    .toggle("")

}


document.querySelector("button.fat").addEventListener("click",showhide)

    */







 /*
const hide = document.querySelector(".modal-over")
const showhide = document.getElementsByClassName("top")
const button = document.getElementsByName("button")


for (let element of showhide){
    element.addEventListener("hide", function(){
    const content = element.getElementsByClassName("content_detail").innerHTML
    hide.classList.add('active')
    hide.querySelector("img").src = `${img}`
    hide.querySelector("h2").innerHTML = `${txt}`
    hide.querySelector("p").innerHTML= `${autor}`
    })

}



document.querySelector(".modal").addEventListener("click", function(){
    hide.classList.remove('active')
})


    /*
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
    }) */






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
