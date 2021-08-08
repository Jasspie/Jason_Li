function importAll(r) {
  let images = {}
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item)
  })
  return images
}
const images = importAll(
  require.context("../assets/skills", false, /\.(png|jpe?g|svg)$/)
)

export const SKILLS = [
  {
    tech: [
      {
        name: "Python",
        logo: images["python.png"].default,
      },
      {
        name: "JavaScript",
        logo: images["javascript.png"].default,
      },
      {
        name: "TypeScript",
        logo: images["typescript.png"].default,
      },
      {
        name: "GraphQL",
        logo: images["graphql.png"].default,
      },
      {
        name: "HTML",
        logo: images["html.png"].default,
      },
      {
        name: "CSS",
        logo: images["css.png"].default,
      },
      {
        name: "Java",
        logo: images["java.png"].default,
      },
    ],
    title: "Programming Languages",
  },
  {
    tech: [
      {
        name: "React",
        logo: images["react.png"].default,
      },
      {
        name: "Redux",
        logo: images["redux.png"].default,
      },
      {
        name: "Node.js",
        logo: images["node.png"].default,
      },
      {
        name: "Express",
        logo: images["express.png"].default,
      },
      {
        name: "Gatsby",
        logo: images["gatsby.png"].default,
      },
      {
        name: "Bootstrap",
        logo: images["bootstrap.png"].default,
      },
    ],
    title: "Frameworks / Libraries",
  },
  {
    tech: [
      {
        name: "Firebase",
        logo: images["firebase.png"].default,
      },
      {
        name: "PotgreSQL",
        logo: images["postgres.png"].default,
      },
      {
        name: "MongoDB",
        logo: images["mongo.png"].default,
      },
    ],
    title: "Databases",
  },
]
