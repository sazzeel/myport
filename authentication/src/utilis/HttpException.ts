import { statusCodes } from "../constants/statusCodes";

class HttpExceprtion extends Error{
    statusCode: number
    isCustom : boolean

    constructor (message: string, statusCode: number){
        super(message)
        this.statusCode = statusCode
        this.isCustom = true
        Error.captureStackTrace(this, this.constructor)
    }

    static badRequest (message: string){
        return new HttpExceprtion(message, statusCodes.BAD_REQUEST)
    }
    static unauthorized (message: string){
        return new HttpExceprtion(message, statusCodes.UNAUTHORIZED)

    }
    static notFound(message: string){
        return new HttpExceprtion(message, statusCodes.NOT_FOUND)
    }
    static conflict(message: string){
        return new HttpExceprtion(message, statusCodes.CONFLICT)
    }
    static forbidden(message: string){
        return new HttpExceprtion(message, statusCodes.CONFLICT)
    }
    static internalServerError(message: string){
        return new HttpExceprtion(message, statusCodes.INTERNAL_SERVER_ERROR)
    }
}

export default HttpExceprtion
 