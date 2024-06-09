import * as HttpResponse from "../../utils/http-helper"
import * as repository from "../../repositories/publisher-repository"

export const getPublisherService = async () => {
    const data = await repository.findAllPublisher()
    const response = HttpResponse.ok(data)

    return response
}