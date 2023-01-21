import db from "../database.js";

async function CarAdsCreate(
  picture,
  name,
  price,
  mark,
  year,
  description,
  userid
) {
  return db.query(
    `INSERT INTO ads (picture, name, price, mark, year, description, userid) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [picture, name, price, mark, year, description, userid]
  );
}

async function ReadAds() {
  return db.query(`SELECT id, picture, name, price from ads`);
}

async function ReadAdDetails(id) {
  return db.query(
    `SELECT ads.*, users.email, users.number FROM ads JOIN users ON ads."userid"=users.id WHERE ads.id  = $1`,
    [id]
  );
}

async function UpdatePictureAd(id, userid, picture) {
  return db.query(`UPDATE ads SET picture = $1 WHERE id=$2 AND userid =$3`, [
    picture,
    id,
    userid,
  ]);
}
async function UpdateNameAd(id, userid, name) {
  return db.query(`UPDATE ads SET name = $1 WHERE id=$2 AND userid =$3`, [
    name,
    id,
    userid,
  ]);
}
async function UpdatePriceAd(id, userid, price) {
  return db.query(`UPDATE ads SET price = $1 WHERE id=$2 AND userid= $3`, [
    price,
    id,
    userid,
  ]);
}
async function UpdateMarkAd(id, userid, mark) {
  return db.query(`UPDATE ads SET mark = $1 WHERE id=$2 AND userid =$3`, [
    mark,
    id,
    userid,
  ]);
}
async function UpdateYearAd(id, userid, year) {
  return db.query(`UPDATE ads SET year = $1 WHERE id=$2 AND userid =$3`, [
    year,
    id,
    userid,
  ]);
}
async function UpdateDescriptionAd(id, userid, description) {
  return db.query(
    `UPDATE ads SET description = $1 WHERE id=$2 AND userid =$3`,
    [description, id, userid]
  );
}

async function DeleteAd(id, userid) {
  return db.query(`DELETE FROM ads WHERE id=$1 AND userid=$2`,[id, userid])
}

async function UserAds(userid) {
  return db.query(`SELECT * FROM ads WHERE userid = $1`, [userid])
}

export {
  CarAdsCreate,
  ReadAds,
  ReadAdDetails,
  UpdatePictureAd,
  UpdateNameAd,
  UpdatePriceAd,
  UpdateMarkAd,
  UpdateYearAd,
  UpdateDescriptionAd,
  DeleteAd,
  UserAds
};
