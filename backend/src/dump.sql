create table if not exists carros (
	id serial primary key,
  	nome text not null,
  	marca text not null,
  	ano_fabricacao integer not null,
  	descricao text,
  	nome_dono text not null,
  	email_dono text not null,
  	telefone_dono text not null
);