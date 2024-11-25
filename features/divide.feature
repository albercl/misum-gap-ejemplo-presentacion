# language: es
Característica: Como usuario quiero poder dividir dos números

  Escenario: Dividir dos números
    Dado que tengo dos números: 4 y 2
    Cuando los divido
    Entonces obtengo como resultado 2

  Escenario: Dividir por cero
    Dado que tengo dos números: 10 y 0
    Cuando los divido
    Entonces obtengo un error

  Escenario: Dividir un número entre sí mismo
    Dado que tengo dos números: 15 y 15
    Cuando los divido
    Entonces obtengo como resultado 1

  Escenario: Dividir un número negativo
    Dado que tengo dos números: -10 y 2
    Cuando los divido
    Entonces obtengo como resultado -5
