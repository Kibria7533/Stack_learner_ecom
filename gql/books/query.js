export const typeDef = `
  extend type Query {
    book(id: Int!): Book
  }  

  type Book {
    title: String
    author: Author
  }
`;