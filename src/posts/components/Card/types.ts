export interface IUser {
    id: number;
    name: string;
    username: string;
}

export interface ICardProps {
    title: string;
    body: string;
    user: IUser;
}