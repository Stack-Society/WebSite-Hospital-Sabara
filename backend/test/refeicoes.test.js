const { after, before, test } = require('node:test');
const assert = require('node:assert/strict');
const app = require('../server');

let server;
let baseUrl;

before(async () => {
    await new Promise((resolve) => {
        server = app.listen(0, '127.0.0.1', resolve);
    });

    const { port } = server.address();
    baseUrl = `http://127.0.0.1:${port}`;
});

after(async () => {
    await new Promise((resolve, reject) => {
        server.close((error) => error ? reject(error) : resolve());
    });
});

test('GET /refeicoes retorna o cardápio', async () => {
    const response = await fetch(`${baseUrl}/refeicoes`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.ok(Array.isArray(body));
    assert.ok(body.length > 0);
    assert.deepEqual(
        Object.keys(body[0]).sort(),
        ['descricao', 'id', 'imagem', 'refeicao']
    );
});
