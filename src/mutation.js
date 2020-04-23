import { idArg, mutationType, stringArg } from 'nexus';

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
        t.crud.deleteOneGalaxy()

        t.field('createGalaxy', {
            type: 'Galaxy',
            args: {
                category: stringArg({ nullable: false}),
                name: stringArg({ nullable: false }),
                constellation: stringArg({ nullable: false }),
                nameOrigin: stringArg({ nullable: false }),
                distance: stringArg({ nullable: false })
            },
            resolve: (parent, { category, name, constellation, nameOrigin, distance  }, ctx) => {
                return ctx.prisma.galaxy.create({
                    data: {
                        category,
                        name,
                        constellation,
                        nameOrigin,
                        distance
                    }
                })
            }
        })

        t.field('updateGalaxy', {
            type: 'Galaxy',
            args: { 
                id: idArg(),
                category: stringArg(),
                name: stringArg(),
                constellation: stringArg(),
                nameOrigin: stringArg(),
                distance: stringArg(),
            },
            resolve: (parent, { id, category, name, constellation, nameOrigin, distance}, ctx) => {
                return ctx.prisma.galaxy.update({
                    where: {
                        id
                    },
                    data: {
                        category,
                        name,
                        constellation, 
                        nameOrigin,
                        distance
                    }
                })
            }
        })
    }
})