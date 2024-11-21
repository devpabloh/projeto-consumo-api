// Primeira forma de fazer
/* .then(resposta => resposta.json())
.then(r => {
    if(r.error){
        throw new Error("Esse CEP não existe.");
        
        }else{
            console.log(r)
        }
        })   
        .catch(error => console.log(error))
        .finally(message=> console.log('Processamento concluído.')) */
        
// Segunda forma de fazer - refatorado
async function buscarEndereço() {
    var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
    var consultaCepConvertida = await consultaCEP.json();
   
    console.log(consultaCepConvertida)
}

buscarEndereço()
        