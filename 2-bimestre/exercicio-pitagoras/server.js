const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS para permitir qualquer origem
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' permite qualquer origem
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//se vier uma requisição POST para a rota /enviar-mensagem, o servidor irá processar a mensagem recebida, convertê-la para maiúsculas e enviar uma resposta de volta ao cliente.
app.post('/enviar-mensagem', (req, res) => {
    let CA = req.body.CA;
    let CB = req.body.CB;
    console.log(`Catetos recebidos foram: ${CA} ${CB}`);
    hip = Math.sqrt(CA**2 + CB**2);
    console.log(`A hipotenusa devolvida será: ${hip}`);
    let resposta = `Eu sou o servidor, você mandou os catetos "${CA} ${CB}" que foi recebida com sucesso! - sua hipotenusa é "${hip}" `
    res.send(resposta);
});

const obterIP = () => {
    const interfaces = os.networkInterfaces();
    for (let nomeInterface in interfaces) {
        for (let info of interfaces[nomeInterface]) {
            if (info.family === 'IPv4' && !info.internal) return info.address;
        }
    }
    return 'localhost';
};

const ip = obterIP()

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
})
