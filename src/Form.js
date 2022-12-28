import React, { useState } from "react";

const MadlibsForm = () => {
    const [noun1, setNoun1] = useState("");
    const [noun2, setNoun2] = useState("");
    const [adjective, setAdjective] = useState("");
    const [color, setColor] = useState("");

    const handleNoun1Change = (e) => {
        setNoun1(e.target.value)
    }
    const handleNoun2Change = (e) => {
        setNoun2(e.target.value)
    }
    const handleAdjChange = (e) => {
        setAdjective(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`There was a ${color} ${noun1} who loved a ${adjective} ${noun2}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="noun" value={noun1} onChange={handleNoun1Change}></input>
            <input type="text" placeholder="noun" value={noun2} onChange={handleNoun2Change}></input>
            <input type="text" placeholder="adjective" value={adjective} onChange={handleAdjChange}></input>
            <input type="text" placeholder="color" value={color} onChange={handleColorChange}></input>
            <button>Get Story</button>
        </form>
    )
}

export default MadlibsForm;