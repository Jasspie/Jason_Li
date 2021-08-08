import React from "react"
import { Image } from "react-bootstrap"
import { motion } from "framer-motion"

function importAll(r) {
  let images = {}
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item)
  })
  return images
}

const images = importAll(
  require.context("../../assets/laptop", false, /\.(png|jpe?g|svg)$/)
)

export default function Laptop({ opacity }) {
  return (
    <>
      <Image
        fluid
        src={images["Frame.png"].default}
        style={{ position: "absolute", zIndex: 1000000 }}
      />
      <Image
        fluid
        src={images["Off.png"].default}
        style={{ position: "absolute", zIndex: 0 }}
      />
      <motion.div style={{ opacity, position: "absolute", zIndex: 100 }}>
        <Image src={images["On.png"].default} fluid />
      </motion.div>
    </>
  )
}
