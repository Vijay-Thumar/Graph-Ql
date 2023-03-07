import React, { useState } from 'react'
import { gql } from '@apollo/client'

const GET_CHARACTER_LOCATIONS = gql`
query{
    characters(filter: {
        name: "Morty Smith"
    }){
        result{
            location{
                name
            }
        }
    }
}
`
function Search() {
    const [name, setName] = useState('')
    return (
        <div>
            <input value={name} onChange={e => { setName(e.target.value) }} />
            <button onClick={()=>{}}>Search</button>
        </div>
    )
}

export default Search