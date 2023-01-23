use concessionariaDB;

create table
    tb_carros (
        id int PRIMARY KEY auto_increment,
        nome_veiculo VARCHAR(200),
        modelo VARCHAR(200),
        ano_fabricacao DATE,
        descricao VARCHAR(200),
        dono_nome VARCHAR(200),
        dono_email VARCHAR(200),
        dono_telefone VARCHAR(20),
    );