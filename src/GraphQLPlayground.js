/* query getAllPeople {
    People {
      id
      updatedAt
      name
      age
      }
  }
  query getPerson {
    Person (id: "ck87ski7j0000z5141sbkgqs7") {
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
      name:"Billy Joe", 
      age: 17
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
      name:"Billy", 
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
  } */