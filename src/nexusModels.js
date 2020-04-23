import { objectType } from 'nexus';

const Galaxy = objectType({
    name: 'Galaxy',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.category()
        t.model.name()
        t.model.constellation()
        t.model.nameOrigin()
        t.model.distance()
    }
})

export const Models = [
    Galaxy
];