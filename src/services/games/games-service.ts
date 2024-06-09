import { gameModel } from "../../models/game-model"
import * as GamesRepostory from "../../repositories/games-repository"
import * as httpResponse from "../../utils/http-helper"

export const getGameService = async ()=>{
    const data = await GamesRepostory.findAllGames()
    let response = null

    if(data){
        response = await httpResponse.ok(data)
    } else {
        response = await httpResponse.noContent()
    }

    return response
}

export const getGameByIdService = async (id: number)=> {
    const data = await GamesRepostory.findGameById(id)
    let response = null

    if(data){
        response = await httpResponse.ok(data)
    }else{
        response = await httpResponse.noContent()
    }

    return response
}

export const createGameService = async (game: gameModel) => {
    let response = null

    if(Object.keys(game).length !== 0){
        await GamesRepostory.insertGame(game)
        response = httpResponse.created()
    }else{
        response = await httpResponse.badRequest()
    }

    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null
    const isDeleted = await GamesRepostory.deleteOneGame(id)

    if(isDeleted){
        response = await httpResponse.ok({message:"deleted"})
    }else{
        response = await httpResponse.badRequest()
    }
    return response
}

export const updateGameService = async (id: number, game: gameModel) => {
    const data = await GamesRepostory.findAndModifyGame(id, game)
    let response = null

    if(Object.keys(game).length !== 0){
        response = httpResponse.ok(data)
    } else{
        response = await httpResponse.badRequest()
    }

    return response
}