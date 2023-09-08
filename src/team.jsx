import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11)

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)
        
    }
    const handleRemove = () =>{

        setTeam(team -1)
    }




    const TeamStyle ={
        border:'2px solid purple',
        margin: '10px',
        padding:'10px',
        borderRadius:'30px'

    }


    return(
        <div style={TeamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleRemove}>REMOVE</button>
        </div>
    )
}