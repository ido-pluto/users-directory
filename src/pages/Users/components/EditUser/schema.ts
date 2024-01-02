import {z} from 'zod';
import {UserInfo} from '../../types.ts';
import {v4 as uuidv4} from 'uuid';
import {NEW_USER_IMAGE} from '../../../../const.ts';

export function createUserSchema(emailDoesNotExists: (email: string) => boolean) {
    return z.object({
        name: z.object({
            title: z.string().min(1, 'Required'),
            first: z.string().min(1, 'Required'),
            last: z.string().min(1, 'Required')
        }),
        email: z.string().email({message: 'Invalid email'})
            .refine(emailDoesNotExists, 'Email already exists'),
        location: z.object({
            city: z.string().min(1, 'Required'),
            country: z.string().min(1, 'Required'),
            street: z.object({
                number: z.coerce.number().min(1, 'Required'),
                name: z.string().min(1, 'Required')
            })
        })
    });
}

export function newEmptyUser(): UserInfo {
    return {
        name: {
            title: '',
            first: '',
            last: ''
        },
        email: '',
        location: {
            city: '',
            country: '',
            street: {
                number: 0,
                name: ''
            }
        },
        id: {
            name: 'new',
            value: uuidv4().slice(0, 8)
        },
        picture: {
            medium: NEW_USER_IMAGE,
        },
    };
}
