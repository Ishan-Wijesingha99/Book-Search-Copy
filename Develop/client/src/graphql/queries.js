

import React from "react";


// import useQuery and gql statement
import { useQuery, gql } from '@apollo/client'



export const GET_ME = gql`
    query {
        me {
            _id
            username
            email
            bookCount
            savedBooks
        }
    }
`

