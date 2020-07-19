import {useState, useEffect} from 'react'

const useAnimatedScale = (scGap, delay) => {
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
                        setAnimated(true)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

const useDimension = () => {
    const [w. setW] = useState(window.innerWidth)
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
