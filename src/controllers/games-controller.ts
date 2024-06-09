import express, {Request, Response} from "express"
import * as service from "../services/games/games-service"
import { gameModel } from "../models/game-model"


export const getGame = async (req:Request, res: Response)=>{

    const httpResponse = await service.getGameService()
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getGameById = async (req:Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.getGameByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const postGames = async (req:Request, res:Response)=> {
    const bodyValue = req.body
    const httpResponse = await service.createGameService(bodyValue)
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const deleteGameById = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.deletePlayerService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updateGame = async(req:Request, res:Response) => {
    const id = parseInt(req.params.id)
    const bodyValue:gameModel = req.body
    const httpResponse = await service.updateGameService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}
