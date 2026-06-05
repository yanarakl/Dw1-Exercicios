CREATE TABLE produto (
    id_produto SERIAL PRIMARY KEY,
    nome_produto VARCHAR(100),
    quantidade_produto INT,
    quantidade_minima_produto INT,
    quantidade_maxima_produto INT
);

INSERT INTO produto 
(nome_produto, quantidade_produto, quantidade_minima_produto, quantidade_maxima_produto)
VALUES  ('Bolo', 2, 3, 10),
        ('Doce', 3, 5, 10),
        ('Bala', 7, 10, 15),
        ('Pão', 18, 20, 50);