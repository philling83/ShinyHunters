import React from 'react';
// import {Paper} from '@material-ui/core'
import ReactDOM from 'react-dom';
// import { Draggable } from 'react-beautiful-dnd'
import "./PokemonCards.css"

let stagingAreaArray = [false, false, false, false, false, false];

const PokemonCards = (props) => {

    const addToTeam = () => {

        let screen = document.getElementById('team-builder_screen')
        // let buildingScreen = (
        //     <div id="staging-area_build" className="staging-area_build">Hello</div>
        // )
        let submitScreen = (
            // <div className="staging-area_submit_container">
            <div id="staging-area_submit" className="staging-area_submit">Submit Your Team</div>
            // </div>
        )

        const removeFromTeam = (e) => {
            // console.log(screen.hasChildNodes())
            if (screen.hasChildNodes()) {
                ReactDOM.unmountComponentAtNode(document.getElementById('team-builder_screen'))
            }

            let id = e.target.parentNode.parentNode.id.slice(-1)
            stagingAreaArray[id - 1] = false
            // console.log(stagingAreaArray)
            ReactDOM.unmountComponentAtNode(document.getElementById(`staging-area-${id}`))
        }

        let element = (
            <div className='staging-area_pokemon-cards' onClick={(e) => removeFromTeam(e)}>
                <img src={props.pokemon.sprite} alt=""/>
            </div>
        )

        for (let i = 1; i < 7; i++) {
            let stagingArea = document.getElementById(`staging-area-${i}`)

            if (stagingArea.innerHTML) {
                continue;
            } else {
                stagingAreaArray[i - 1] = true
                console.log(stagingAreaArray)
                ReactDOM.render(element, stagingArea)
                break;
            }
        }

        if (!stagingAreaArray.includes(false)) {
            ReactDOM.render(submitScreen, screen)
        } else {
            if (screen.hasChildNodes()) {
                ReactDOM.unmountComponentAtNode(document.getElementById('staging-area_submit'))
            }
        }
    }

    return (
        // <Draggable draggableId={props.pokemon.id.toString()} index={props.index}>
            // {(provided) => (
                // <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    // <Paper>
                        <div className='carousel_pokemon-cards' onClick={addToTeam}>
                            <div className="carousel_pokemon-title">{props.pokemon.name}</div>
                            <img src={props.pokemon.sprite} alt=""/>
                        </div>
                    // </Paper>
                // </div>
            // )}
        // </Draggable>
    )
}

export default PokemonCards
