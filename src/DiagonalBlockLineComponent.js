import React from 'react'
import DiagonalBlock from './DiagonalBlock'
import {useAnimatedScale, useDimension} from './hooks'

const DiagonalBlockLineComponent = ({props}) => {
    const {scale, start} = useAnimatedScale(0.01, 30)
    const {w, h} = useDimension()
    return <div>
        <DiagonalBlock w = {w} h = {h} scale  = {scale} onClick = {start}/>
    </div>
}

export default DiagonalBlockLineComponent
