import React from 'react'
import {useStyle} from './hooks'

const Comp = ({style}) => {
    return <div style = {style}></div>
}
const DiagonalBlock = ({w, h, scale, onClick}) => {
    const {getDiagonalLine, getDiagonalBlock} = useStyle(w, h, i)
    return <div>
        {[0, 1].map(i => <Comp key = {`line_${i}`} style = {getDiagonalLine(i)}/>)}
        <Comp key = {`diagonalline`} style = {getDiagonalBlock()}/>
    </div>
}

export default DiagonalBlock
