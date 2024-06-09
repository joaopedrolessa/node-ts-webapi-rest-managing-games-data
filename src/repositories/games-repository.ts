import { gameModel } from "../models/game-model"
import fs from "fs/promises"

const database = "./src/data/games.json"


export const findAllGames = async (): Promise<gameModel[]> =>{
    const data = await fs.readFile(database, "utf-8")
    const games: gameModel[] = JSON.parse(data)
    console.log(games)
    return games
}


export const findGameById = async (id: number): Promise<gameModel | undefined> =>{
    const data = await fs.readFile(database, "utf-8")
    const games: gameModel[] = JSON.parse(data)
    return games.find((game) => game.id === id)
}

export const insertGame = async (game: gameModel) => {
    const data = await fs.readFile(database, "utf-8")
    const games: gameModel[] = JSON.parse(data)
    games.push(game)
    await fs.writeFile(database, JSON.stringify(games), "utf-8")

}

export const deleteOneGame = async (id: number) => {
    const data = await fs.readFile(database, "utf-8")
    const games: gameModel[] = JSON.parse(data)
    const index = games.findIndex((game) => game.id === id)

    if(index !== -1){
        games.splice(index, 1)
        await fs.writeFile(database, JSON.stringify(games, null, 2), "utf-8")
        return true
    }

    return false
}

export const findAndModifyGame = async (id: number, dados:gameModel): Promise<gameModel> => {
    const data = await fs.readFile(database, "utf-8")
    const games: gameModel[] = JSON.parse(data)
    const index = games.findIndex((game) => game.id === id)

    if (index !== -1){
        games[index] = dados
        await fs.writeFile(database, JSON.stringify(games, null, 2), "utf-8")

    }
    return games[index]
}