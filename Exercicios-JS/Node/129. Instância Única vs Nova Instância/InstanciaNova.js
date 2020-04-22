// Uma factory Retorna um Objeto
module.exports = () => 
{
    return{ // Função Construtora, vai retornar um Objeto, após instanciar
        valor: 1,
        inc()
        {
            this.valor++
        }
    }
}