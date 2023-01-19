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

module.exports = {
    carData,
    carExpect,
    wrongCarData
}