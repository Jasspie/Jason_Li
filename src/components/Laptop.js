import React from "react"
import { Image } from "react-bootstrap"
import { motion } from "framer-motion"
import Laptop1 from "../assets/Laptop1.png"
import test from "../assets/test.png"

export default function Laptop({ opacity, lap }) {
  return (
    <>
      <Image fluid src={Laptop1} style={{ position: "absolute", zIndex: 0 }} />
      <motion.div style={{ opacity, position: "absolute", zIndex: 100 }}>
        <Image src={test} fluid />
      </motion.div>
    </>
  )
}
