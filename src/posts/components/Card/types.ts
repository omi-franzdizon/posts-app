export interface User {
    id: number;
    name: string;
    username: string;
}

export interface ICardProps {
    title: string;
    body: string;
    user: User;
}