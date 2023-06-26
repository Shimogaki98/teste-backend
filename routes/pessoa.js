import express  from "express";
import {addPessoa} from "../controllers/pessoa.js"

const router = express.Router()

router.post("/", addPessoa)

export default router