const Config = {
    backend: import.meta.env.BACKEND_HOST || "http://localhost:3000",
    secret: import.meta.env.SECRET || "1324354657687980",
}

export default Config;