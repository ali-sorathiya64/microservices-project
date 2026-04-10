import express from "express"
import {getUsers, userCreate} from '../controller/user.controller.js';

const router = express.Router();


router.post("/create-user",userCreate);
router.get("/get-user",getUsers);


export default router;


