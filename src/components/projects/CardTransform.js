import useRefScrollProgress from "../../hooks/useRefScrollProgress"
import { useTransform, useViewportScroll } from "framer-motion"

export default function ImageTransform(reference) {
  const { scrollYProgress } = useViewportScroll()

  const { start, end } = useRefScrollProgress(reference)
  const inc = (end - start) / 4

  const x = useTransform(
    scrollYProgress,
    [start, start + inc, end - inc, end],
    [-200, 0, 0, -200]
  )

  return x
}
