const carData = {
    "nome": "Pálio",
    "marca": "Fiat",
    "ano_fabricacao": 2004,
    "descricao": "Bom carro",
    "nome_dono": "Carlos Alberto",
    "email_dono": "ca@email.com",
    "telefone_dono": "(32)98771-4025"
};

const carExpect = {
    "nome": "Pálio",
    "marca": "Fiat",
    "ano_fabricacao": 2004,
    "descricao": "Bom carro",
    "dono": {
        "nome": "Carlos Alberto",
        "email": "ca@email.com",
        "telefone": "(32)98771-4025"
    }
}

const wrongCarData = {
    "marca": "Fiat",
    "ano_fabricacao": 2004,
    "descricao": "Bom carro",
    "nome_dono": "Carlos Alberto",
    "email_dono": "ca@email.com",
    "telefone_dono": "(32)98771-4025"
}

const carID = {
    "nome": "Fusca",
    "marca": "Volkswagen",
    "ano_fabricacao": 1969,
    "descricao": "Raridade",
    "dono": {
        "nome": "Rodrigo Lanziotti",
        "email": "rodrigo@email.com",
        "telefone": "(32)99849-8002"
    }
}

const carUpdate = {
    "nome": "Corsa",
    "marca": "Chevrolet",
    "ano_fabricacao": 1998,
    "descricao": "Horrivel",
    "nome_dono": "Pedro Castro",
    "email_dono": "pedro@email.com",
    "telefone_dono": "(32)98875-6231"
}

const wrongCarUpdate = {
    "marca": "Chevrolet",
    "ano_fabricacao": 1998,
    "descricao": "Horrivel",
    "nome_dono": "Pedro Castro",
    "email_dono": "pedro@email.com",
    "telefone_dono": "(32)98875-6231"
}

module.exports = {
    carData,
    carExpect,
    wrongCarData,
    carID,
    carUpdate,
    wrongCarUpdate
}