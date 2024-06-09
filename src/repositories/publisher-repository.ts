import { publisherModel } from "../models/publisher-model"
import fs from "fs/promises"

const database = "./src/data/publisher.json"


export const findAllPublisher = async (): Promise<publisherModel[]> =>{
    const data = await fs.readFile(database, "utf-8")
    const publisher: publisherModel[] = JSON.parse(data)
    return publisher

}
