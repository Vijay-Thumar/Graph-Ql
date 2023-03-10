import React from 'react'
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import './CharList.css'



export default function CharactersList() {

  const { error, loading, data } = useCharacters()
  // console.log(error, loading, data);

  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>something went wrong</div>
  }
  return (
    <div className='charList'>
      <Link to={'/search'}>Go to Search</Link>
      <div className='charList'>
        {
          data.characters.results.map(char => {
            return <Link to={`/${char.id}`}>
              <img src={char.image} />
              <h2>{char.name}</h2>
            </Link>
          })
        }
      </div>
    </div>
  )
}
