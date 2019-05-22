import React, { Component } from 'react'
import './Palette.css'

const Color = ({active, color, onClick }) => {
    return (
        <div
            className={`color ${active ? 'active': ''}`}
            onClick={onClick}
            style={{ background: color }}
        ></div>
    )
}

const Palette = ({colors, selected, onSelect}) => {
    const colorList = colors.map( (color) => (
        <Color
            active={selected === color}
            color={color}
            key={color}
            onClick={ () => onSelect(color) }
        />)
    )
    return (
        <div className="palette">
            { colorList }
        </div>
    )
}

export default Palette