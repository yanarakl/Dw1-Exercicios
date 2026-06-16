const express = require('express');
const os = require('os');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Configuração do pool de conexão com PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Middleware para parsear JSON
app.use(express.json());

<<<<<<< HEAD
// Middleware CORS para permitir qualquer origem
=======
// Middleware CORS para permitir qualquer orige
>>>>>>> ed6a475 (exercicio)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Rota para listar todas as pessoas
app.get('/checarestoque', async (req, res) => {
  try {
<<<<<<< HEAD
    const query = 'SELECT id_produto, nome_produto, quantidade_produto, quantidade_minima_produto, quantidade_maxima_produto FROM produto ORDER BY id_produto';
=======
    const query = 'SELECT * FROM public.produto ORDER BY id_produto';
>>>>>>> ed6a475 (exercicio)
    const result = await pool.query(query);

    const produtos = result.rows.map(produto => {
      let quantidade_repor = 0;

      if (produto.quantidade_produto < produto.quantidade_minima_produto) {
        quantidade_repor = produto.quantidade_maxima_produto - produto.quantidade_produto;
      }

      return {
        id_produto: produto.id_produto,
        nome_produto: produto.nome_produto,
        quantidade_produto: produto.quantidade_produto,
        quantidade_minima_produto: produto.quantidade_minima_produto,
        quantidade_maxima_produto: produto.quantidade_maxima_produto,
        quantidade_repor: quantidade_repor
      };
    });
    res.json({
      sucesso: true,
      produtos: produtos,
      quantidade: produtos.length
    });

  } catch (error) {
    console.error('Erro ao listar produtos:', error);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno do servidor'
    });
  }
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

const ip = obterIP();

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
  console.log(`Rotas disponíveis:`);
  console.log(`  GET http://${ip}:${port}/checarestoque - Checar estoque`);
});