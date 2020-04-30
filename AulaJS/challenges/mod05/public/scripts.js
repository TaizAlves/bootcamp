const currentpage = window.location.pathname

const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems){
    if(currentpage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}

