import { GraphQLSchema } from "graphql";

const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};


export const schema: GraphQLSchema = makeExcutableSchema({
    resolvers,
    typeDefs,
});

function makeExcutableSchema(arg0: { resolvers: any; typeDefs: any; }): GraphQLSchema {
    throw new Error("Function not implemented.");
}
