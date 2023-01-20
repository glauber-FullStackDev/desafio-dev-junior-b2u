const options = {
  explerer: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vehicle sales Express API with Swagger",
      version: "1.0.0",
      description:
        "Vehicle sales API from B2Y challenge",
      contact: {
        name: "Fernando Passos",
        url: "https://passoz.dev",
        email: "passoz.dev@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

export { options };
