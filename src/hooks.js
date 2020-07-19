import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        setW(window.innerWidth)
        setH(window.innerHeight)
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h,

    }
}

export const useStyle = (w, h, scale) => {
    const size = Math.min(w, h) / 10
    const sf = sinify(scale)
    const position = 'absolute'
    const  width = `${size}px`
    const height = `${size}px`
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    const background = '#3F51B5'
    const lineSize = Math.min(w, h) / 90
    return {
        getDiagonalBlock() {
            const left = `${size + (w - 2 * size) * sf}px`
            const top = `${size + (h - 2 * size) * sf}px`
            return {position, left, top, background, width, height}
        },

        getDiagonalLine(i) {
            const sfi = divideScale(sf, i, 2)
            const left = `${size}px`
            const top = `${size + (h - 2 * size) * i}px`
            const width = `${lineSize * (1 - i) + (w - size) * i * sfi}px`
            const height = `${lineSize * i + (h - 2 * size) * (1 - i) * sfi}px`
            return {position, top, left, width, height, background}
        }
    }
}
