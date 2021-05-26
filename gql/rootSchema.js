
import {resolvers as authorResolvers} from './users/resolver';
import {typeDef as Book} from './users/query';
import {resolvers as bookResolvers} from './books/resolver'; 
import {typeDef as Book} from './books/query'; 
import { merge } from 'lodash';

// If you had Query fields not associated with a
// specific type you could put them here
const Query = `
  type Query {
    _empty: String
  }
`;

const resolvers = {};

makeExecutableSchema({
  typeDefs: [ Query, Author, Book ],
  resolvers: merge(resolvers, authorResolvers, bookResolvers),
});