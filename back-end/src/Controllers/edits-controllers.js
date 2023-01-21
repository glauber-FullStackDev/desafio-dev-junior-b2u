import httpStatus from "http-status";
import * as authRepository from "../Repositories/authentication-repository.js";
import * as adsRepository from "../Repositories/ads-repository.js";

export async function editPicture(req, res) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const { rows: session } = await authRepository.FindToken(token);
  const { id } = req.params;
  const { picture } = req.body;

  try {
    if (session.length === 0) {
      return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
    }

    if (!picture) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send("Preencha o campo em vazio!");
    }

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
    }

    if (!id || id < 1) {
      return res.status(httpStatus.CONFLICT).send("id inválido.");
    }

    await adsRepository.UpdatePictureAd(id, session[0].userid, picture);

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.send(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function editName(req, res) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const { rows: session } = await authRepository.FindToken(token);
  const { id } = req.params;
  const { name } = req.body;

  try {
    if (session.length === 0) {
      return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
    }

    if (!name) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send("Preencha o campo em vazio!");
    }

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
    }

    if (!id || id < 1) {
      return res.status(httpStatus.CONFLICT).send("id inválido.");
    }

    await adsRepository.UpdateNameAd(id, session[0].userid, name);

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.send(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function editPrice(req, res) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const { rows: session } = await authRepository.FindToken(token);
  const { id } = req.params;
  const { price } = req.body;

  try {
    if (session.length === 0) {
      return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
    }

    if (!price) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send("Preencha o campo em vazio!");
    }

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
    }

    if (!id || id < 1) {
      return res.status(httpStatus.CONFLICT).send("id inválido.");
    }

    await adsRepository.UpdatePriceAd(id, session[0].userid, price);

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.send(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function editMark(req, res) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const { rows: session } = await authRepository.FindToken(token);
  const { id } = req.params;
  const { mark } = req.body;

  try {
    if (session.length === 0) {
      return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
    }

    if (!mark) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send("Preencha o campo em vazio!");
    }

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
    }

    if (!id || id < 1) {
      return res.status(httpStatus.CONFLICT).send("id inválido.");
    }

    await adsRepository.UpdateMarkAd(id, session[0].userid, mark);

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.send(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function editYear(req, res) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const { rows: session } = await authRepository.FindToken(token);
  const { id } = req.params;
  const { year } = req.body;

  try {
    if (session.length === 0) {
      return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
    }

    if (!year) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send("Preencha o campo em vazio!");
    }

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
    }

    if (!id || id < 1) {
      return res.status(httpStatus.CONFLICT).send("id inválido.");
    }

    await adsRepository.UpdateYearAd(id, session[0].userid, year);

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.send(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function editDescription(req, res) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  const { rows: session } = await authRepository.FindToken(token);
  const { id } = req.params;
  const { description } = req.body;

  try {
    if (session.length === 0) {
      return res.status(httpStatus.UNAUTHORIZED).send("Não logado");
    }

    if (!description) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send("Preencha o campo em vazio!");
    }

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).send("Sem Token de acesso.");
    }

    if (!id || id < 1) {
      return res.status(httpStatus.CONFLICT).send("id inválido.");
    }

    await adsRepository.UpdateDescriptionAd(id, session[0].userid, description);

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.send(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
