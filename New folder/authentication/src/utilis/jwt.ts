import { config } from "dotenv";
import Jwt,{  SignOptions } from "jsonwebtoken";

// Sign access or refresh token

// export const signJwt = (
//     payload: Object,
//     keyName: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey',
//     options: SignOptions
// ) => {
//     const privateKey = Buffer.from(
//         config.get<string>(keyName),
//         // '..'

//     )
//     // .toString('');
//     return Jwt.sign(payload, privateKey, {
//         // ...config(option && options),
//         // alogrithm: '',
//     });
// };

// export const verifyJwt = <T> (
//     token: string,
//     keyName: 'accessTokenPublicKey' | 'refreshTokenPublicKey',

// ): T | null => {
//     try{
//         const publicKey = Buffer.from(

//         )
//     }
// }