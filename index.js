const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.get('/', (req, res) => {
    res.send("direct to /api-docs to see the documentation")
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log('Server running at port 3000: http://127.0.0.1:3000')
})