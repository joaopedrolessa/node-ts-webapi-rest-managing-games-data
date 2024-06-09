import { Request, Response } from "express";
import { getPublisherService } from "../services/publisher-services/publisher-services";


export const getPublisher = async (req:Request, res:Response) =>{
    const response = await getPublisherService()
    res.status(response.statusCode).json(response.body)
}