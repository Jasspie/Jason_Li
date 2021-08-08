import React from "react"
import useRefScrollProgress from "../../hooks/useRefScrollProgress"
import { useTransform, useViewportScroll } from "framer-motion"

export default function ImageOpacity(reference) {
  const { scrollYProgress } = useViewportScroll()

  const { start, end } = useRefScrollProgress(reference)
  const inc = (end - start) / 4

  const opacity = useTransform(
    scrollYProgress,
    [start, start + inc, end - inc, end],
    [0, 1, 1, 0]
  )

  return opacity
}
