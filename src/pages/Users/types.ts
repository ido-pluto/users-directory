export type UserInfo = {
    name: {
        title: string,
        first: string,
        last: string
    },
    email: string,
    picture: {
        medium: string
    },
    location: {
        city: string,
        country: string,
        street: {
            number: number,
            name: string
        }
    }
    id: {
        name: string,
        value: string
    }
}
