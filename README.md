# GraphQL Apollo Server Example

This example shows how to implement a **GraphQL server with JavaScript (Node.js)** based on  [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.apollographql.com/docs/apollo-server/), PostgreSQL, and [GraphQL Nexus](https://nexus.js.org/). 

## How to use

### 1. Download example & install dependencies

Install npm dependencies:

```
cd into project
npm install
```

### 2. Run each npm script in package.json

```
npm run nuke
npm run launchDocker
npm run createDB
npm run generate
npm run postinstall
npm run seed
npm run dev
```
In another terminal tab run

```
npm run start
```

### 3. Open in browser

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the GraphQL Playground. Then navigate to [http://localhost:5555](http://localhost:5555) in your broswer to view Prisma Studio.

### 4. Use the GraphQL API in the playground

Below is the query and mutation code that can be used in the playground. The ids in the update and delete mutations are already connected to test persons for ease of use.


```graphql
query getAllPeople {
  People {
    id
    updatedAt
    name
    age
	}
}

query getPerson {
  Person (id: "ck87wo9nt0000hd14abn7naad") {
    name
    age
  }
}

query filterPeople {
  filterPeople (searchstring: "100") {
    name
    age
  }
}

mutation createPerson {
  createPerson(
    name:"Delete Person Example", 
    age: 0
  ) {
    id,
    updatedAt,
    name
    age
  }
}

mutation updatePerson {
  updatePerson(
    id: "ck87ulxb200004u141k8lwtmj",
    name:"Updated Person", 
    age: 170
  ) {
    id,
    updatedAt,
    name
    age
  }
}

mutation deleteOnePerson {
  deleteOnePerson(where: {
  id: "ck87ulxb200004u141k8lwtmj"})
  {
    id
    name
  }
}
```

