import { Router } from "express";
import {
  CreateAd,
  AllAds,
  AdsDetails,
  DeleteAds,
  UserAds,
} from "../Controllers/ads-controllers.js";
import {
  editPicture,
  editName,
  editPrice,
  editMark,
  editYear,
  editDescription,
} from "../Controllers/edits-controllers.js";
import { schemaValidationMiddleware } from "../Middlewares/schema-validation-middleware.js";
import {
  createAdSchema,
  editPicSchema,
  editNameSchema,
  editPriceSchema,
  editMarkSchema,
  editYearSchema,
  editDescSchema,
} from "../Schemas/ads-schema.js";

const adRouter = Router();

adRouter.post("/creatAd", schemaValidationMiddleware(createAdSchema), CreateAd);
adRouter.get("/ads", AllAds);
adRouter.get("/ads/:id", AdsDetails);
adRouter.put(
  "/editPic/:id",
  schemaValidationMiddleware(editPicSchema),
  editPicture
);
adRouter.put(
  "/editName/:id",
  schemaValidationMiddleware(editNameSchema),
  editName
);
adRouter.put(
  "/editPrice/:id",
  schemaValidationMiddleware(editPriceSchema),
  editPrice
);
adRouter.put(
  "/editMark/:id",
  schemaValidationMiddleware(editMarkSchema),
  editMark
);
adRouter.put(
  "/editYear/:id",
  schemaValidationMiddleware(editYearSchema),
  editYear
);
adRouter.put(
  "/editDesc/:id",
  schemaValidationMiddleware(editDescSchema),
  editDescription
);
adRouter.delete("/delete/:id", DeleteAds);
adRouter.get("/myAds", UserAds);

export default adRouter;
