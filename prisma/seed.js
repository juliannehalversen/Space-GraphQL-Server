import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

async function createPerson() {
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
}

main()
.catch(e => console.error(e))
.finally(async () => {
  await prismaClient.disconnect()
})