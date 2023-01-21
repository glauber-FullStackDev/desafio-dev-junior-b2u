const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());
let carros = [
  {
    id: 1,
    nome: "Gol",
    marca: "Volkswagen",
    anoDeFabricacao: 2016,
    desc: "",
    imagem:
      "https://images.kavak.services/images/25650/volkswagen-gol-hatch-back-cl2016-frontal-lateral-piloto-cercana-1604970955144.jpg",
    proprietario: {
      nome: "Paulo",
      email: "paulo@gmail.com",
      telefone: "2515144151",
    },
  },
  {
    id: 2,
    nome: "Onix",
    marca: "Chevrolet",
    anoDeFabricacao: 2018,
    desc: "",
    imagem:
      "http://www.listadecarros.com/wp-content/uploads/2016/02/Chevrolet-Onix-2016-6.jpg",
    proprietario: {
      nome: "Carlos",
      email: "carlos@gmail.com",
      telefone: "2515144151",
    },
  },
  {
    id: 3,
    nome: "Mobi",
    marca: "Fiat",
    anoDeFabricacao: 2022,
    desc: "",
    imagem: "https://i.ytimg.com/vi/AHdB26vhiuk/maxresdefault.jpg",
    proprietario: {
      nome: "João",
      email: "joao@gmail.com",
      telefone: "2515144151",
    },
  },
  {
    id: 4,
    nome: "S10",
    marca: "Chevrolet",
    anoDeFabricacao: 2015,
    desc: "",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.cdn.autoevolution.com%2Fimages%2Fnews%2Fgallery%2F2021-chevrolet-s10-pickup-truck-revealed-its-the-colorados-brazilian-brother_3.jpg&f=1&nofb=1&ipt=fa7e1a7d2246196942085764002b1a22e96bd71a7da41d22e8f8fc4114c0ffbe&ipo=images",
    proprietario: {
      nome: "Carlos",
      email: "carlos@gmail.com",
      telefone: "2515144151",
    },
  },
];

server.get("/carros", (req, res) => {
  return res.json(carros);
});

server.get("/carros/:index", (req, res) => {
  const { index } = req.params;
  const carro = carros.find((carro) => carro.id === +index);
  if (!!carro) {
    return res.json(carro);
  } else {
    return res.status(404).json("Carro não encontrado.");
  }
});

server.post("/carros", (req, res) => {
  const carroInput = req.body;
  const carro = {
    id: carros.length + 1,
    nome: carroInput.nome,
    marca: carroInput.marca,
    imagem: carroInput.imagem,
    anoDeFabricacao: carroInput.anoDeFabricacao,
    desc: carroInput.desc,
    proprietario: carroInput.proprietario,
  };

  carros.push(carro);
  return res.json(carro);
});

server.put("/carro/:index", (req, res) => {
  const { index } = req.params;
  const carroInput = req.body;

  const carroExiste = carros.some((carro) => carro.id === +index);

  if (!carroExiste) return res.status(404).json("Carro não encontrado.");
  const carro = carros.find((carro) => carro.id === +index);

  console.log(carro);

  carro.nome = !!carroInput?.nome ? carroInput?.nome : carro.nome;
  carro.anoDeFabricacao = carroInput?.anoDeFabricacao
    ? carroInput?.anoDeFabricacao
    : carro.anoDeFabricacao;
  carro.marca = carroInput?.marca || carro.marca;
  carro.imagem = carroInput?.imagem || carro.imagem;
  carro.proprietario.nome =
    carroInput?.proprietario?.nome || carro.proprietario.nome;
  carro.proprietario.email =
    carroInput?.proprietario?.email || carro.proprietario.email;
  carro.proprietario.telefone =
    carroInput?.proprietario?.telefone || carro.proprietario.telefone;

  const carroEdicao = {
    id: +index,
    nome: carroInput?.nome,
    marca: carroInput?.marca,
    imagem: carroInput?.imagem,
    anoDeFabricacao: carroInput?.anoDeFabricacao,
    desc: carroInput?.desc,
    proprietario: carroInput?.proprietario,
  };

  carros.splice(index - 1, 1, carro);
  return res.json(carro);
});

server.delete("/carro/:index", (req, res) => {
  const { index } = req.params;
  // const carroDeletado = carros.splice(index - 1, 1);
  if (carros.some((carro) => carro.id === +index)) {
    carros = carros?.filter((carro) => carro?.id !== +index);
    return res.json(`Carro com id: ${index} deletado!`);
  } else {
    return res.status(404).json("Carro não encontrado.");
  }
});

server.listen(3000);
