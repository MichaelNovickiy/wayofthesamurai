export type photosType ={
    small: null | string
    large: null | string
}

export type usersType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: photosType,
    status: null,
    followed: boolean,
}