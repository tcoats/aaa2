const adjectives = require('./adjectives')
const animals = require('./animals')

const rand = (max) => Math.floor(Math.random() * Math.floor(max))

module.exports = (count) =>
  [
  	...Array(count || 2).fill()
      .map(() => adjectives[rand(adjectives.length)]),
  	animals[rand(animals.length)]
  ]
  .join('-')
