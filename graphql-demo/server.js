
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

const schema = buildSchema(`
    type Query {
        hello: String
        student: Student
    }

    type Student {
        id: ID
        name: String
        course: String
        age: Int
    }
`);

const studentData = {
    id: "101",
    name: "Rahul",
    course: "B.Tech CSE",
    age: 20
};

const root = {
    hello: () => {
        return "Hello from GraphQL!";
    },

    student: () => {
        return studentData;
    }
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/graphql");
});