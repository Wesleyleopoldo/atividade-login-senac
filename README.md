<p align="center">
  <h1 align="center">Atividade Login Senac Documentação</h1>
</p>

Repósitorio criado para entrega da atividade elaborada pelo Professor Matheus Eloim. Segue abaixo mais intruções para usar ou até mesmo modificar o projeto.

Segue meu LinkedIn para entrar em contato [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?logo=linkedin)]([https://www.linkedin.com/in/seu-usuario/](https://www.linkedin.com/in/wesley-silva-a07878300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)).


>**Notas**: Segue os requisitos para rodar o projeto.
> 1. Nodejs
> 2. VSCode(ou qualquer outra IDE da sua preferência).

**Dependências**:
> 1. Bcryptjs
> 2. Sequelize
> 3. JsonWebToken
> 4. Dotenv
> 5. Express
> 6. sqlite3
> 7. Nodemom

## Cloning do projeto

```bash
git clone https://github.com/Wesleyleopoldo/atividade-login-senac.git
```
ou

```bash
git clone git@github.com:Wesleyleopoldo/atividade-login-senac.git
```
>***Caso esteja usando chaves SSH use o segundo comando!!***

## Instruções para executar o projeto:

O projeto está devidamente separado em pastas com o backend na pasta `backend` e o frontend na pasta `frontend`.
 Antes de rodar certifique-se de criar os pares de chaves privada e publica dentro da pasta `backend`:

 ```bash
openssl genrsa -out private.key 2048
```

Criando chave pública:

 ```bash
openssl rsa -pubout -in private.key -out public.key
```

>***Caso esteja em windows execute esses comandos pelo bash do GIT***

Crie o `.env` na raiz do `backend` para definir a porta em que o backend utilizara:

```js
PORT=[SUAPORTA]
```

Após configurar porta e o par de chaves para a criação do token JWT execute dentro da pasta `backend` o comando:

```bash
npm i
```
e para executar o backend execute o script:

```bash
npm run dev
```

## Para o frontend:

Na pasta `frontend` as únicas alterações que serão necessárias são as do link da API do backend que será necessário alterar antes de consumir a api:

No `login.js` e `cadastro.js` insira a porta que você configurou para o seu backend.
