import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as team_actions from '../store/teams'

const HomePage = () => {

    const [teams, setTeams] = useState()
    const [loaded, setLoaded] = useState(false);

    const dispatch = useDispatch()
    const teams = useSelector((state) => state.teams)

    useEffect(() => {


    })
}

export default HomePage
