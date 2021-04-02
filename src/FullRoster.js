import React from 'react'
import CricketPlayerAPI from './CPlayerApi'
import { Link } from 'react-router-dom'


const FullRoster = () => (
    <div>
        <ul>
            {
                CricketPlayerAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default FullRoster
