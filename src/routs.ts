import { Router } from "express";
import * as gamesControler from "./controllers/games-controller";
import * as publisherControle from "./controllers/publisher-controller"

const router = Router()

router.get("/games", gamesControler.getGame)
router.get("/games/:id", gamesControler.getGameById)
router.post("/games", gamesControler.postGames)
router.delete("/games/:id", gamesControler.deleteGameById)
router.patch("/games/:id", gamesControler.updateGame)

router.get("/publisher", publisherControle.getPublisher)


export default router