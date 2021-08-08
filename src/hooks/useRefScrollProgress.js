import { useState, useLayoutEffect } from "react"

export default function useRefScrollProgress(inputRef) {
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)

  useLayoutEffect(() => {
    if (!inputRef.current) return
    const rect = inputRef.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = rect.top + scrollTop
    setStart(offsetTop / document.body.clientHeight)
    setEnd((offsetTop + rect.height) / document.body.clientHeight)
  }, [inputRef])

  return { start, end }
}
