
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
