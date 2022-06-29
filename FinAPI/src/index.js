const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
const customers = [];
/**
 * cpf - string
 *  name - string
 *  id - uuid
 *  statement []
 */
app.post("/account", (request, response) => {
    const { cpf, name } = request.body;
    const custormerAlreadyExists = customers.some(
        (customer) => customer.cpf === cpf
    );

    if(custormerAlreadyExists){
        return response.status(400).json({ error: "Customer already exists!"});
    }
    const id = uuidv4();
    customers.push({
        cpf,
        name,
        id,
        statement: [],
    });
    return response.status(200).send();
});

app.get("/statement/:cpf", (request, response) => {
    const { cpf } = request.params;
    const customer = customers.find((customer) => customer.pdf === cpf);
    if(!customer){
        return response.status(400).json({ error: "Customer not found"});
    }
    return response.json(customer.statement);
});

app.listen(3333);