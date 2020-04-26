# Space GraphQL Server

This example shows how to implement a GraphQL server with JavaScript (Node.js) based on  [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [apollo-server](https://www.apollographql.com/docs/apollo-server/), PostgreSQL, and [GraphQL Nexus](https://nexus.js.org/). 

Below are instructions on how to test the functionality in Prisma studio. **If you would like this connected to the front end, then follow the steps 1-3 and follow the instructions for the [front end repository](https://github.com/juliannehalversen/Space-Frontend)**

## How to use

### 1. Clone project into desired location 

```
git clone https://github.com/juliannehalversen/Space-GraphQL-Server.git
```

### 2. Install dependencies

Install project dependencies:

```
cd Space-GraphQL-Server
npm install
```

### 3. Run each npm script in package.json
This launches docker and creates a container. It also creates and instance of Postgres and will seed the database. Note: postinstall will be run after npm install, no need to manually run it.

```
npm run launchDocker
npm run createDB
npm run generate
npm run seed
npm run dev
```
In another terminal tab run

```
npm run start
```

### 4. Open in browser

* Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the GraphQL Playground.
* Then navigate to [http://localhost:5555](http://localhost:5555) in your broswer to view Prisma Studio.

# Using the GraphQL API in the playground
Note: I have provided data for the items in "quotes" to make testing queries and mutations quick and easy. Those can be replaced for data with your choosing

## Queries
Run this query to get all data:

```graphql
query getAllGalaxies {
  Galaxy {
    id
    updatedAt
    category
    name
    constellation,
    nameOrigin,
    distance
	}
}
```

#### Get a single Person
```graphql
query getOne {
  Galaxy (id:"ck9hile6z0000kh14fi9uov8o") {
    id
    category
    name
    constellation
    nameOrigin
    distance
  }
}
```

Run this query to filter based on a searchstring
```graphql
query filterGalaxies {
  filterGalaxies (searchstring: "Milky Way") {
   	category
    name
    constellation,
    nameOrigin,
    distance
  }
}
```

## Mutations

Run this mutation to create a new item:
 ```graphql
mutation createGalaxy {
  createGalaxy(
    category: "Galaxy",
    name:"Test galaxy for mutations", 
    constellation:"test",
    nameOrigin:"test origin"
    distance: "4"
  ) {
    id,
    updatedAt,
    category,
    name,
    constellation,
    nameOrigin,
    distance
  }
}
```

Run this mutation to update an item: 

```graphql
mutation updateGalaxy {
  updateGalaxy(
    id: "ck9hd7nql00003i14lp9zfb0f",
		category:"Planet"
    name:"Test update mutation"
    constellation:"test"
    nameOrigin:"test"
    distance:"50000000"
  ) {
    id,
    updatedAt,
    category,
    name,
    constellation,
    nameOrigin,
    distance
  }
}
```

Run this mutation to delete an item: 
Note: The id provided is for an item that was created to test the delete functionality
```graphql
mutation deleteOneGalaxy {
  deleteOneGalaxy(where: {
  id: "ck9hd8wqx00013i14a9grvi8p"})
  {
    id
    category
    name
    constellation,
    nameOrigin,
    distance
  }
}
```


