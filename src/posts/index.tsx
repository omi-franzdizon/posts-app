import React, { FC } from 'react';
import Card from './components/Card/Card';
import { CardsContainer } from './components/Card/styles';

const mockData = [{
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    user: {
        id: 1,
        name: "Leanne Graham",
        username: "Bret"
        }
    },
    {
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        user: {
            id: 1,
            name: "Leanne Graham",
            username: "Bret"
        }
    }
];

const Posts: FC = () => {

    return (
        <CardsContainer>
            {mockData.map((post) => (<Card key={post.id} title={post.title} body={post.body} user={post.user}/>))}
        </CardsContainer>
    );
}

export default Posts;