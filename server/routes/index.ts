import { Router } from "express";
import { userRouters } from "./user";

const router = Router();

router.use(userRouters)

export { router as apiRouters };