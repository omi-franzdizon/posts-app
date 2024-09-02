import { FC } from 'react';
import Card from './components/Card/Card';
import { CardsContainer } from './components/Card/styles';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from './queries';
import { IUser } from './components/Card/types';

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
    const {loading, error, data} = useQuery(GET_POSTS);

    console.log(data)

    let content = <></>;
    if (loading) {
        content = <p>Loading...</p>
    } else if (error) {
        content = <p>Error! ${error.message}</p>
    } else if (data?.posts?.data){
        content = <>{data?.posts?.data?.map((post) => {
            if(!post || !post.user) return;
            const shapedUser: IUser = {id: parseInt(post.user.id || '-1'), name: post.user?.name || '', username: post.user?.username || ''};
            return <Card key={post.id || ''} title={post.title || ''} body={post.body || ''} user={shapedUser}/>;
        })}</>;
    }
    
    return (
        <CardsContainer>
            {content}
        </CardsContainer>
    );
}

export default Posts;