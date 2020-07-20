// Eu quero que associado a cada um desses elementos, apareça o nome da "tag".

// Não precisava criar esse objeto que estou criando abaixo, em relação a cores também
const colors = 
{
    p: "#388e3c",
    div: "#1565c0",
    span: "#e53935",
    section: "#f67809",
    ul: "#5e35b1",
    ol: "#fbc02d",
    header: "#d81b60",
    nav: "#64dd17",
    main: "#00acc1",
    footer: "#304ffe",
    form: "#9f6581",
    padrao: "#616161",
    get(tag)
    {
        return this[tag] ? this[tag] : this.padrao
    }

}

document.querySelectorAll(".tag").forEach(elemento =>  // Pegando elementos da "class" "tag".
{ // uso um "forEach" para pegar os elementos, nomiei de "box"

    const tagName = elemento.tagName.toLowerCase()
    // Linha de cima, eu peguei o elemento(box), botei para ver a tag (tagName) e botei minusculos (toLowerCase)

    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains("nolabel")) // "box" é meu elemento
    { // dentro do box eu tenho uma lista de elementos, que seria "classList", nesse caso aqui eu so tenho uma class, que é "tag"
      // O que estou perguntando nesse "if" é.. "está contido na lista de class o nolabel ?" se estiver contido, não entre nesse trecho.

      const label = document.createElement("label") // Caso não tenha, estou criando aqui um label para ele 
      label.style.backgroundColor = colors.get(tagName)

      label.innerHTML = tagName // Colocar nome da tag, dentro da label que acabei de criar
      elemento.insertBefore(label, elemento.childNodes[0]) // Ele vai inserir antes do primeiro elemento, antes do Node (Minuto 9:45 e 10:32)
    }
})