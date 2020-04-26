import { idArg, queryType, stringArg } from 'nexus';

export const Query = queryType({
    definition(t) {
        t.crud.galaxy()
        t.field('Galaxy', {
            type:'Galaxy',
            nullable: true,
            args: { id: idArg() },
            resolve: (parent, { id }, ctx) => {
                return ctx.prisma.galaxy.findOne({
                    where: {
                        id,
                    }
                })
            }
        }) 

        t.list.field('Galaxies', {
            type: 'Galaxy',
            resolve: (parent, arg, ctx) => {
                return ctx.prisma.galaxy.findMany()
            }
        })

        t.list.field('filterGalaxies', {
            type: 'Galaxy',
            args: {
                searchstring: stringArg({ nullable: true }),
            },
            resolve: (parent, { searchstring }, ctx) => {
                return ctx.prisma.galaxy.findMany({
                    where: {
                        OR: [
                            { category: {contains: searchstring }},
                            { name: {contains: searchstring }},
                            { constellation: {contains: searchstring }},
                            { nameOrigin: {contains: searchstring }},
                            { distance: {contains: searchstring }},
                        ],
                    },
                })
            }
        })
    }
})