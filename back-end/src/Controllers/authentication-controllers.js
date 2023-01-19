import * as authRepository from "../Repositories/authentication-repository.js";
import httpStatus from "http-status";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export async function SignUp(req, res) {

    const {name, email, number, password} = req.body
    const {rows: user} = await authRepository.FindUser(email);

    try {

        if (!email || !password || !name || !number) {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send("Preencha os campos em vazios!");
          }

        if(user.length > 0) {
           return res.status(httpStatus.CONFLICT).send('Já existe um usuário cadastrado com esse e-mail.')
        }

        const passwordHash = bcrypt.hashSync(password, 13);

        await authRepository.CreateUser(email, passwordHash, name, number);

        res.sendStatus(httpStatus.CREATED);


    }
    catch (error) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
        console.log(error)
    }
}

export async function SignIn(req, res) {
   
    const {email, password} = req.body;
    const key = process.env.JWT_SECRET;

    try {

        const {rows: user} = await authRepository.FindUser(email);
        const token = jwt.sign(user[0].id, key);
        const sendToken = {
            token: token,
          };

        if (!email || !password) {
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send("Preencha os campos em vazios!");
          }

        if(user.length === 0) {
            return res.status(httpStatus.UNAUTHORIZED).send("Usuário incompátivel ou inexistente");
        }

        if(bcrypt.compareSync(password, user[0].password) == false) {
            return res.status(httpStatus.UNAUTHORIZED).send("Senha incorreta.");
          }

        await authRepository.Login(token, user[0].id)

        res.status(httpStatus.OK).send(sendToken);

    }
    catch (error) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
        console.log(error)
    }
}

export async function Logout(req, res) {
    const token = req.headers.authorization?.replace("Bearer ", "");

    try {

        const {rows: session} = await authRepository.FindToken(token)

        if(session.length === 0) {
            return res.status(httpStatus.UNAUTHORIZED).send("Sessão não encontrada");
        }

        if (!token) {
            return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
          }

        await authRepository.Finish(session[0].token);
        
        res.status(httpStatus.OK);
    }
    catch (error) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
        console.log(error)
    }
}