const currentpage = window.location.pathname

const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems){
    if(currentpage.includes(item.getAttribute("href"))){
        item.classList.add("active")
    }
}

function paginate(seletedPage, totalPage){

    let pages = [] ,
        oldPage 


    for (let currentPage=1; currentPage <= totalPage;currentPage++){
        
        const firstsLastsPages= currentPage == 1 || currentPage == totalPage || currentPage==2 
        const pagesAfter= currentPage <= seletedPage+2
       const pagesBefore= currentPage >= seletedPage-2
       

        if(firstsLastsPages|| pagesAfter&&pagesBefore ){

            if(oldPage && currentPage - oldPage >2){
                pages.push("...")
            }
            if(oldPage && currentPage- oldPage==2){
                pages.push(oldPage+1)
            }
        
            pages.push(currentPage)

            oldPage= currentPage

        } 

    }
    
    return pages  
}



 function createPagination(pagination){

    
    const filter = pagination.dataset.filter
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const pages = paginate(page,total)


    let elements = ""

    for (let page of pages){
        

       if (String(page).includes("...")){
            elements += `<span>${page}</span>`
        }else{
            if (filter){
                elements += `<a href="?page= ${page}&filter=${filter}">${page}</a>`
            }else{
                elements += `<a href="?page= ${page}">${page}</a>`

            }
        }     
    }
    pagination.innerHTML= elements  
 }

 

const pagination = document.querySelector(".pagination")

if(pagination){
    createPagination(pagination)
}


