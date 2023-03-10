import React from 'react'
import './Character.css'
import { useCharacter } from '../hooks/useCharacter'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export default function Character() {
    const { id } = useParams()
    const { data, loading, error } = useCharacter(id)
    console.log(data, loading, error);

    if (error) {
        return <div>Something went wrong</div>
    }
    if (loading) {
        return <div>Wait for una-momento...</div>
    }
    return (
        <div>
            <Link to={'/'}>Go back</Link>
            <Link to={'/mutation'}>Go Create Product</Link>
            <div className='Character'>
                <img src={data.character.image} width={750} height={750} alt='ImageOfCharacter' />
                <div className='Character-content'>
                    <h1>{data.character.name}</h1>
                    <p>{data.character.gender}</p>
                    <div className='Character-episode'>
                        {data.character.episode.map((episode) => {
                            return <div key={episode.name}>
                                {episode.name} - <b>{episode.episode}</b>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
