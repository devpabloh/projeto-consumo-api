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
async function buscarEndereço(cep) {
    var mensagemErro = document.getElementById("erro")
    mensagemErro.innerHTML = ""
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCEP.json();
        if(consultaCepConvertida.error){
            throw Error('CEP não existente');
        }
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (error) {
        mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente </p>`
        console.log(error)
    }
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", ()=> buscarEndereço(cep.value))

// Caso precise buscar vários Ceps.
/* let ceps = ['01001000', '53040110'];
let conjuntoCeps = ceps.map(valores => buscarEndereço(valores))
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)) */