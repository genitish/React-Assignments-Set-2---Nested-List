import React, { useState } from 'react';


const List = ({states}) =>{
    
    const [stateIndex, setState] = useState(null);
    const [cityIndex, setCity] = useState(null);
    const stateHandler = (index) =>{
        if(stateIndex != null && index === stateIndex){
            setState(null)
        }
        else{
            setState(index)
        }
        setCity(null)
    }
    const cityHandler = (index) =>{
        if(cityIndex != null && index === cityIndex){
            setCity(null)
        }
        else{
            setCity(index)
        }
    }

    return(
        <div className = " container">
            <ol>
                {states.map((state,index) =>
                <li id = {"state" + (index+1)} key = {index+1} >
                    <button onClick = {e => stateHandler(index)}>{state.name}</button>

                    {stateIndex != undefined && state.name == states[stateIndex].name
                        && <ol>{states[stateIndex].cities.map((city,index) =>
                            <li id = {"city" + (index+1)} key = {index+1} >
                                <button onClick = {e => cityHandler(index)}>{city.name} </button>

                                    {cityIndex!= undefined && 
                                        city.name == states[stateIndex].cities[cityIndex].name && 
                                        <ol>{states[stateIndex].cities[cityIndex].towns.map((town,index) =>
                                            <li id = {"town" + (index+1)} key = {index+1} >
                                                {town.name}
                                            </li>
                                        )}</ol>
                                    }
                            </li>
                        )}
                        </ol>}
                     
                </li>
                )}
            </ol>

        </div>
    )
}

export default List;