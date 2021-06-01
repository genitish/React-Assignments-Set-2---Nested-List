import React, { useState } from 'react';


const List = ({states}) =>{

    const [stateIndex, setState] = useState(null);
    const [cityIndex, setCity] = useState(null);
    const stateHandler = (index) =>{
        if(stateIndex != null){
            setState(null)
            setCity(null)
        }
        else{
            setState(index)
        }
    }
    const cityHandler = (index) =>{
        if(cityIndex != null){
            setCity(null)
        }
        else{
            setCity(index)
        }
    }

    return(
        <div className = " container">
            <ol>States:
                {states.map((state,index) =>
                <li id = {"state" + (index+1)} key = {index+1} >
                    <button onClick = {e => stateHandler(index)}>{state.name}</button>

                     <ul>
                    {stateIndex != undefined && state.name == states[stateIndex].name
                        && states[stateIndex].cities.map((city,index) =>
                            <li id = {"city" + (index+1)} key = {index+1} >
                                <button onClick = {e => cityHandler(index)}>{city.name} </button>

                                <ul>
                                    {   cityIndex!= undefined && 
                                    city.name == states[stateIndex].cities[cityIndex].name && 
                                    states[stateIndex].cities[cityIndex].towns.map((town,index) =>
                                        <li id = {"town" + (index+1)} key = {index+1} >
                                            {town.name}
                                            </li>
                                        )} 
                                </ul>
                            </li>
                        )}
                    </ul>
                     
                </li>
                )}
            </ol>

            {/* <ol>City:
                {stateIndex && states[stateIndex].cities.map((city,index) =>
                <li id = {"city" + (index+1)} key = {index+1} >
                    <button onClick = {e => cityHandler(index)}>{city.name}
                    </button></li>
                )}
            </ol>

            <ol>Towns:
                {cityIndex && states[stateIndex].cities[cityIndex].towns.map((town,index) =>
                <li id = {"town" + (index+1)} key = {index+1} >
                    {town.name}
                    </li>
                )}
                </ol> */}

        </div>
    )
}

export default List;