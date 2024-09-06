function pesquisar() {
    let section = document.getElementyById("resultado-pesquisa");
    let  campoPesquisa = document.getElementById 
    ("campo-pesquisa").value 

    console.log(campoPesquisa);
    // se campoPesquisa for uma string sem nada 
    if (campoPesquisa == ""){return

    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    

console.log(section);


{
//para cada dado  erro da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()

    // se titulo includes campoPesquisa
    if ((dado.titulo.includes(campoPesquisa)) || dado.descricao.includes(campoPesquisa))
   
    // Cria um novo elemento HTML para cada resultado


    // Atribui os resultados gerados á seção HTML 
    section.innerHTML = resultados; 
}
    section.innerHTML +=   `  <section class="resultados-pesquisa">  
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">Gabrielzinho</a>
                </h2>
                    <p class="descricao-meta">Gabrielzinho, nome pelo qual é carinhosamente conhecido, é um nadador paralímpico brasileiro que tem encantado o mundo com suas conquistas extraordinárias.
                        <a href="https://pt.wikipedia.org/wiki/Gabrielzinho"target="_blank">Mais Informações</a>
            </div>`
}

section.innerHTML = resultados 
if (!resultados){
    resultados = "<p>Nada foi encontrado </p>"
}

}



