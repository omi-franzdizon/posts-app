import { FC, PropsWithChildren } from 'react';
import { Container, Header, Content } from './styles';

const RootWrapper: FC<PropsWithChildren> = ({children}) => {
    return (
        <Container>
            <Header>POSTS</Header>
            <Content>{children}</Content>
        </Container>
    );
}

export default RootWrapper;