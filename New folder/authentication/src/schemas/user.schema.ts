import { object, string, z } from "zod";
import { TypeOf } from "zod/lib";
import { RoleEnumType } from "../entity/user.entity";



export const createUserSchema = object ({
    body: object ({
        name: string({
            required_error: 'Name is required',
        }),
        email: string({
            required_error: 'Email address is required',
        }).email('Email xaie wrong vayo so do fix it'),
        password: string({
            required_error: 'Password is required',
        })
        .min(8, 'password must be minimum 8 letters')
        .max(40, 'password must not exceed 40 letters'),
        passwordConfirm: string({
            required_error: "password confirm garnu hola",
        }),
        role: z.optional(z.nativeEnum(RoleEnumType)),
    }).refine((data) => data.password === data.passwordConfirm, {
        path: ['passwordConfirm'],
        message: "password milena ",
    }),
});

export const loginUserSchema = object ({
    body: object({
        email: string({
            required_error: 'Email address is required',
        }).email('email address milena'),
        password: string({
            required_error: 'password is required',
        }).min(8, 'Invalid email or password'),
    }),
});

export type CreateUSerInput = Omit<
TypeOf<typeof createUserSchema>['body'],
'passwordConfirm'
>;

export type LoginUserInput = TypeOf <typeof loginUserSchema>['body'];