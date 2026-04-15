import { useRef, useEffect } from 'react'

export default function Circuit() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const container = canvas.parentElement

    const lines = []
    const linesNo = 80
    const linesSize = 20
    const framesPerUpdate = 6
    const fadeFactor = 0.02
    const spawnCols = 6
    let canvasWidth = 0
    let canvasHeight = 0
    let drawNo = 0
    let rafId

    const getSpawn = (index) => {
      const col = index % spawnCols
      const x = Math.round((canvasWidth / (spawnCols - 1)) * col)
      const y = Math.round(canvasHeight / 2)
      return { x, y }
    }

    const resize = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
      canvasWidth = canvas.width
      canvasHeight = canvas.height
      lines.forEach((line, i) => {
        const spawn = getSpawn(i)
        line.location.x = spawn.x
        line.location.y = spawn.y
        line.spawn = spawn
      })
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        let alpha = line.alpha

        const dir = ~~(Math.random() * 3) * 90 === i % 4 * 90 ? 270 : ~~(Math.random() * 3) * 90

        ctx.lineWidth = line.width
        ctx.strokeStyle = `rgba(111, 160, 48, ${alpha})`
        ctx.beginPath()
        ctx.moveTo(line.location.x, line.location.y)

        switch (dir) {
          case 0:   line.location.y -= linesSize; break
          case 90:  line.location.x += linesSize; break
          case 180: line.location.y += linesSize; break
          case 270: line.location.x -= linesSize; break
          default: break
        }

        ctx.lineTo(line.location.x, line.location.y)

        if (
          line.location.x < 0 || line.location.x > canvas.width ||
          line.location.y < 0 || line.location.y > canvas.height
        ) {
          line.location.x = line.spawn.x
          line.location.y = line.spawn.y
          line.alpha = 1
        } else {
          line.alpha = Math.max(0, alpha - fadeFactor)
        }

        ctx.stroke()
      }
    }

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      drawNo++
      if (drawNo % framesPerUpdate !== 0) return
      draw()
    }

    resize()

    for (let i = 0; i < linesNo; i++) {
      const spawn = getSpawn(i)
      lines.push({
        location: { x: spawn.x, y: spawn.y },
        spawn,
        width: Math.random() * 1 + 0.25,
        alpha: 1,
      })
    }

    animate()

    const ro = new ResizeObserver(resize)
    ro.observe(container)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.45,
        pointerEvents: 'none',
      }}
    />
  )
}
