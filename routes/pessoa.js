import express  from "express";
import {addPessoa} from "../controllers/pessoasController.js"

const router = express.Router()

router.post("/", addPessoa)

export default router