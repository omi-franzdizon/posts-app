// import { gql } from '@apollo/client';
import { gql } from '../../src/__generated__/gql';


export const GET_POSTS = gql(`
    query GetPosts {
        posts {
            data {
            id,
            title,
            body,
            user {
                id,
                name,
                username,
                }
            }
        }
    }
`);