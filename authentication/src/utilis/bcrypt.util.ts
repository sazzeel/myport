// import bcrypt from 'bcryptjs'
import bcrypt from 'bcryptjs'

class BcryptUtils{
    static async hash (password: string): Promise<string>{
        return await bcrypt.hash(password, 11)
    }
    static async compare (password:string, hash: string): Promise<boolean>{
        return await bcrypt.compare(password, hash)
    }

}

export default BcryptUtils