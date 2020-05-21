
const Mask = {
    apply(input, func){
        setTimeout(function(){
            input.value= Mask[func](input.value)
        },1)
},

   formatBRL(value){
        value = value.replace(/\D/g,"")

        return  new Intl.NumberFormat('pt-Br', {
            style: 'currency', // 1.000,00
            currency: 'BRL'
        }).format(value/100)
   }
}


const PhotosUpload = {
    input: "",
    preview: document.querySelector('#photos-preview'),
    uploadLimit : 6,
    files: [],
    handlefileInput(event){
        const {files: fileList} = event.target

        PhotosUpload.input = event.target

        if(PhotosUpload.haslimit(event)) return

        Array.from(fileList).forEach(file => {
            
            PhotosUpload.files.push(file)

            const reader = new FileReader()

            reader.onload = () => {
                const image = new Image()
                image.src = String(reader.result)

                const div = PhotosUpload.getContainer(image)
     
                PhotosUpload.preview.appendChild(div)
            }

            reader.readAsDataURL(file)
        })

        PhotosUpload.input.files = PhotosUpload.getAllFiles()

    },
    haslimit(event){
        
        const {uploadLimit, input, preview} = PhotosUpload
        const {files: fileList} = input

        if (fileList.length > uploadLimit){
            alert(`Envie no máximo ${uploadLimit} fotos`)
            event.preventDefault()
            return  true
        }

        const photosDiv = []
        preview.childNodes.forEach(item=> {
            if (item.classList && item.classList.value == "photo")
            photosDiv.push(item)
        })

        const totalPhotos = fileList.length + photosDiv.length

        if (totalPhotos > uploadLimit){
            alert("Você atingiu o limite máximo de fotos")
            event.preventDefault()
            return true
        }

        return false
    },

    getAllFiles(){
        const dataTranfer = new ClipboardEvent("").clipboardData ||   new DataTransfer()     // o primeiro é para o Firefox pois não funciona o DataTransfer no Firefox

        PhotosUpload.files.forEach(file => dataTranfer.items.add(file))

        return dataTranfer.files

    },

    getContainer(image){
        const div = document.createElement('div')
        div.classList.add('photo')

        div.onclick =  PhotosUpload.removePhoto

        div.appendChild(image)

        div.appendChild(PhotosUpload.getRemoveButton())

        return div
    },

    getRemoveButton(){
        const button = document.createElement('i')
        button.classList.add('material-icons')
        button.innerHTML= "close"
        return button
    },
    
    removePhoto(event){
        const photoDiv = event.target.parentNode   // é o i, um a cima (parentNode) é a <div class= "photo">
        const photosArray = Array.from(PhotosUpload.preview.children)
        const index = photosArray.indexOf(photoDiv)

        PhotosUpload.files.splice(index, 1)
        PhotosUpload.input.files = PhotosUpload.getAllFiles()

        photoDiv.remove()

    },
    removeOldPhoto(event){
        const photoDiv = event.target.parentNode

        if(photoDiv.id){
            const removedFiles = document.querySelector('input[name="removed_files"]')
            if (removedFiles){
                removedFiles.value += `${photoDiv.id},`    //tem uma virgula no final, vem do input removed_files
            }
        }

        photoDiv.remove()
    }

   
}


const ImageGallery= {
    highlight: document.querySelector('.gallery .highlight > img'),
    previews: document.querySelectorAll('.gallery-preview img'),
    setImage(e){
        const {target} = e

        ImageGallery.previews.forEach(preview => preview.classList.remove('active'))
        target.classList.add('active')

        ImageGallery.highlight.src = target.src
        Lightbox.image.src = target.src
     }
}


const Lightbox={
    target:document.querySelector('.lightbox-target'),
    image:document.querySelector('.lightbox-target img'),
    closeButton: document.querySelector('.lightbox-target a.lightbox-close'),
    open(){
        Lightbox.target.style.opacity=1
        Lightbox.target.style.top =0 
        Lightbox.target.style.bottom =0
        Lightbox.closeButton.style.top=0
    },
    close(){
        Lightbox.target.style.opacity=0
        Lightbox.target.style.top ="-100%" 
        Lightbox.target.style.bottom ="initial"
        Lightbox.closeButton.style.top= "-80px"

    }
}

/* ENTENDENDO O passo a passo  do código de PhotosUpload

const PhotosUpload = {
    uploadLimit : 6,
    handlefileInput(event){
        const {files: fileList} = event.target
        const {uploadLimit} = PhotosUpload

        if (fileList.length > uploadLimit){
            alert(`Envie no máximo ${uploadLimit} fotos`)
            event.preventDefault()
            return
        }

        Array.from(fileList).forEach(file => {
            const reader = new FileReader()

            reader.onload = () => {
                const image = new Image()
                image.src = String(reader.result)

                const div = document.createElement('div')
                div.classList.add('photo')

                div.onclick = () => alert('remover foto')

                div.appendChild(image)

                document.querySelector('#photos-preview').appendChild(div)
            }

            reader.readAsDataURL(file)
        })

    },
    haslimit(event){
        
        const {uploadLimit} = PhotosUpload
        const {files:fileList} =event.target

        if (fileList.length > uploadLimit){
            alert(`Envie no máximo ${uploadLimit} fotos`)
            event.preventDefault()
            return  true
        }
        return false
    },


    2 FASE:: Aula Atualizando Lista de arquivos 

    getAllFiles(){
        const dataTranfer = new ClipboardEvent("").clipboardData ||   new DataTransfer()     // o primeiro é para o Firefox pois não funciona o DataTransfer no Firefox

        PhotosUpload.files.forEach(file => dataTranfer.items.add(file))

        return dataTranfer.files

    },

    getContainer(image){
        const div = document.createElement('div')
        div.classList.add('photo')

        div.onclick =  PhotosUpload.removePhoto

        div.appendChild(image)

        div.appendChild(PhotosUpload.getRemoveButton())

        return div
    },

    getRemoveButton(){
        const button = document.createElement('i')
        button.classList.add('material-icons')
        button.innerHTML= "close"
        return button
    },
    
    removePhoto(event){
        const photoDiv = event.target.parentNode   // é o i, um a cima (parentNode) é a div
        const photosArray = Array.from(PhotosUpload.preview.children)
        const index = photosArray.indexOf(photoDiv)

        PhotosUpload.files.splice(index, 1)
        PhotosUpload

        photoDiv.remove()


    }

}


*/


