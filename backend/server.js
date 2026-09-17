const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('static'));

const filePath = path.join(__dirname, 'data', 'cardapio.json')

// Listar produtos
app.get('/refeicoes', async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const produtos = JSON.parse(data);
        res.json(produtos);
    } catch (error) {
        console.log('Erro ao ler o arquivo', error);
        res.status(500).json({ message: 'Erro ao buscar o cardápio' });
    }
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
}

module.exports = app;
