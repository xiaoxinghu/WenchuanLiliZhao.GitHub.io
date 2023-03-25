import { ReactNode, useCallback, useState, Children } from 'react'
import { animated, useSprings } from 'react-spring'
import Box from "../box"
import Button from '../button'
import styles from './style.module.scss'


type Props = {
  children: ReactNode
  className?: string
}

function Gallery({ children, ...props }: Props) {
  const [focus, setFocus] = useState(0)

  const items = Children.toArray(children)

  const getStyle = (focus: number) => (i: number) => {
    const distance = i - focus
    const absDistance = Math.abs(distance)
    const scale = 1 - absDistance*16/100
    const offset = distance * 160
    const zIndex = 20 - absDistance
    const opacity = 1 - (absDistance * 0.2)
    return {
      scale, zIndex, x: offset,
      filter: `blur(${absDistance * 4}px)`, opacity,
      immediate: (key: string) => key === "zIndex",
    }
  }

  const move = useCallback((i: number) =>
    setFocus(f => {
      const d = (f + i) % items.length
      return d < 0 ? items.length + d : d
    }
    ), [])

  const [springs, api] = useSprings(items.length, getStyle(focus), [focus])

  return (
    <Box css={{
      position: 'relative',
      margin: 50,
      marginTop: 0,
      marginBottom: 0,
    }}>
      <Box css={{
          position: 'absolute',
          top: '50%',
          zIndex: 100 }}>
        {/* <Button onClick={() => move(-1)}>{'<'}</Button> */}
      </Box>
      <Box css={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }} centered {...props}>
        {springs.map((style, i) => {
          return (
            <animated.div
              key={`slide-${i}`}
              css={{ display: 'block', width: '100%', gridRowStart: 1, gridColumnStart: 1, margin: '0 auto' }}
              style={style}
            >
              {items[i]}
            </animated.div>
          )
        })}
      </Box>
      <Box css={{ position: 'absolute', top: '50%', right: 0, zIndex: 100 }}>
        {/* <Button onClick={() => move(1)}>{`>`}</Button> */}
      </Box>
      {/* add bulb here */}
    </Box>
  )
}

export default Gallery
