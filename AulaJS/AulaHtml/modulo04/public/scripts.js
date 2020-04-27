const currentPage = window.location.pathname // onde está o cursor

const menuItems= document.querySelectorAll("header .links a")



for (item of menuItems){
    if(currentPage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }

} 

