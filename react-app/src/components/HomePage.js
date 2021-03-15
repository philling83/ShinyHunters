import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as team_actions from '../store/teams'

const HomePage = () => {

    // const [teams, setTeams] = useState()
    const [loaded, setLoaded] = useState(false);

    const dispatch = useDispatch()
    const teams = useSelector((state) => state.teams)

    useEffect(() => {

        dispatch(team_actions.allTeams())
        setLoaded(true)
    }, [dispatch])

    console.log(teams)
    return (
        loaded && (
            <>
                {
                    Object.values(teams).map((team) => <div>{team.name}</div>)
                }
            </>
        )
    )
}

export default HomePage
