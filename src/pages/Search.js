import React, { useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!){
    characters(filter: { name: $name }){
        results{
            location{
                name
            }
        }
    }
}
`
function Search() {
    const [name, setName] = useState('')
    const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, { variables: { name } });
    console.log({ called, loading, error, data });

    return (
        <div>
            <Link to={'/'}>Go back to main page</Link>
        <div>
            <input value={name} onChange={e => { setName(e.target.value) }} />
            <button onClick={() => {getLocations()}}>Search</button>
            {loading && <div>Hmmm Just wait for some moments.</div>}
            {error && <div>Something went wrong. </div>}
            {data && (
                <ul>
                    {data.characters.results.map((character)=>{
                        console.log(character);
                        return <li key={character.location.name}>{character.location.name}</li>
                    })}
                </ul>
            )}
        </div></div>
    )
}

export default Search