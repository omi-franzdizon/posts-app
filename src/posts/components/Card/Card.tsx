import { FC } from 'react';
import { CardContainer, PostBody, PostTitle, PostUser } from './styles';
import { ICardProps } from './types';

const Card: FC<ICardProps> = ({title, body, user}) => {
    return (
        <CardContainer>
            <PostTitle>{title}</PostTitle>
            <PostUser>{user.name} ({user.username})</PostUser>
            <PostBody>{body}</PostBody>
        </CardContainer>
    );
}

export default Card;