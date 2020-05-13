// console.log(global) Ira imprimir funções etc do global

// Vou mostrar um jeito de usar, mas tem que ter cuidado em mexer com coisas globais
global.MinhaApp = 
{
    saudacao()
    {
        return "Estou em todos Lugares!"
    },
    nome: "Sistema Legal"
}
/* 
    Isso é "global", adcionei essa função no "Global"
    Significa que qualquer outro arquivo meu tera acesso
    a esse arquivo por ser "global" e isso é perigoso
*/

// Freezando

global.MinhaApp2 = // Aqui eu congelei, Significa que não pode ser modificado
Object.freeze // O minimo que posso fazer é congelar! para evitar que alguem muda
(
    {
        saudacao2()
        {
            return "Estou em todos os lugares! 2"
        },
        nome2: "Sistema legal 2"
    }
)