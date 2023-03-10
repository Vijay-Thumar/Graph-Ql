import React from "react";
import { gql, useMutation } from '@apollo/client'

const CREATE_PRODUCT = gql`
mutation CreateProduct($name: String!, $quantityPerUnit: Int!){
    createProduct(record: {name: $name, quantityPerUnit: $quantityPerUnit}){
        record{
            name
        }
    }
}
`;

export default function Mutation() {
    const [createProduct, {data, loading, error, called}] = useMutation(CREATE_PRODUCT, {
        variables: {
            name: 'Icecream',
            quantityPerUnit: 4
        }
    })
    console.log({data, loading, error, called});
    return (
        <div>
            <button onClick={()=>createProduct()}>Create Product</button>
        </div>
    )
}