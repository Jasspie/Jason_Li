import useRefScrollProgress from "../../hooks/useRefScrollProgress"
import { useTransform, useViewportScroll } from "framer-motion"

export default function ImageTransform(open, exit, initial, final) {
  const { scrollYProgress } = useViewportScroll()
  const { start: openStart, end: openEnd } = useRefScrollProgress(open)
  const { start: exitStart, end: exitEnd } = useRefScrollProgress(exit)
  const { start: initialStart, end: initialEnd } = useRefScrollProgress(initial)

  const scale = useTransform(
    scrollYProgress,
    [initialStart, initialEnd],
    [1, 0.75]
  )
  const opacity = useTransform(
    scrollYProgress,
    [
      openStart,
      (openStart + openEnd) / 2,
      openEnd,
      exitStart,
      exitStart + (exitEnd - exitStart) / 2,
    ],
    [0, 0.3, 1, 1, 0]
  )
  const x = useTransform(
    scrollYProgress,
    [
      openStart,
      (openStart + openEnd) / 2,
      openEnd,
      exitStart,
      (exitStart + exitEnd) / 2,
      exitEnd,
    ],
    ["0rem", "8rem", "12rem", "12rem", "8rem", "0rem"]
  )
  const disappear = useTransform(
    scrollYProgress,
    [exitStart, (exitStart + exitEnd) / 2, exitEnd],
    [1, 1, 0]
  )

  return { opacity, x, scale, disappear }
}
