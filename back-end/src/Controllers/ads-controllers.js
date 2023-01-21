import httpStatus from "http-status";
import * as authRepository from "../Repositories/authentication-repository.js";
import * as adsRepository from "../Repositories/ads-repository.js";

export async function CreateAd(req, res) {
  const { picture, name, price, mark, year, description } = req.body;
  const token = req.headers.authorization?.replace("Bearer ", "");
  const { rows: session } = await authRepository.FindToken(token);

  try {
    if (!picture || !name || !price || !mark || !year || !description) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send("Preencha os campos em vazios!");
    }

    if (session.length === 0) {
      return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
    }

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
    }

    await adsRepository.CarAdsCreate(
      picture,
      name,
      price,
      mark,
      year,
      description,
      session[0].userid
    );

    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error);
    res.send(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function AllAds(req, res) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const { rows: session } = await authRepository.FindToken(token);

  try {
    if (session.length === 0) {
      return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
    }

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
    }

    const { rows: ads } = await adsRepository.ReadAds();

    res.status(httpStatus.OK).send(ads);
  } catch (error) {
    console.log(error);
    res.send(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function AdsDetails(req, res) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const { rows: session } = await authRepository.FindToken(token);
    const { id } = req.params;
  
    try {
      if (session.length === 0) {
        return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
      }
  
      if (!token) {
        return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
      }
  
      if (!id || id < 1) {
        return res.status(httpStatus.CONFLICT).send("id inválido.");
      }
  
      const { rows: ads } = await adsRepository.ReadAdDetails(id);
  
      res.status(httpStatus.OK).send(ads);
    } catch (error) {
      console.log(error);
      res.send(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  export async function DeleteAds(req, res) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const { rows: session } = await authRepository.FindToken(token);
    const { id } = req.params;

    try {
        if (session.length === 0) {
          return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
        }
    
        if (!token) {
          return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
        }
    
        if (!id || id < 1) {
          return res.status(httpStatus.CONFLICT).send("id inválido.");
        }
    
        await adsRepository.DeleteAd(id, session[0].userid)
    
        res.sendStatus(httpStatus.OK);
      } catch (error) {
        console.log(error);
        res.send(httpStatus.INTERNAL_SERVER_ERROR);
      }
  }

  export async function UserAds(req, res) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const { rows: session } = await authRepository.FindToken(token);

    try {
        if (session.length === 0) {
            return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
          }
      
          if (!token) {
            return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
          }

          const {rows: ads} = await adsRepository.UserAds(session[0].userid)

          res.status(httpStatus.OK).send(ads)
    } catch (error) {
        console.log(error);
        res.send(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
