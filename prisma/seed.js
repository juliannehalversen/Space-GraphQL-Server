import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prismaClient = new PrismaClient()

const galaxies = fs.readFileSync('prisma/data/galaxy.json')

function loadGalaxies() {
  const list = JSON.parse(galaxies)
  
 return list.map(galaxy => {
    return {
      data: {
        category: galaxy.category,
        name: galaxy.name,
        constellation: galaxy.constellation,
        nameOrigin: galaxy.nameOrigin,
        distance: galaxy.distance
      }
    }
  })
}

async function main() {
  try {
    const allGalaxies = loadGalaxies()
    for(let galaxy of allGalaxies) {
      await prismaClient.galaxy.create(galaxy)
      .catch(err => console.error(`Error trying to generate items `))
    } 
  } catch(err) {
    console.log(err)
  }
}


/* async function createPerson() {
  try {
    await prismaClient.person.create({
      data: {
        name: 'Test Person',
        age: 100,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

async function main() {
  try {
    await createPerson()
  } catch(err) {
    console.log(err)
  }
} */

main()
.catch(e => console.error(e))
.finally(async () => {
  await prismaClient.disconnect()
})