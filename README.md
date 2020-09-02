
# Revisão Express, MongoDB e Mongoose
Vamos montar um projeto em Express, esse projeto terá conexão com um banco de dados usando o Mongoose.
​
### Requisitos:
​
##### Estrutura Inicial: 
- [x] Criar uma pasta do projeto.
- [x] Criar uma pasta src onde será armazenado esse arquivo.
- [x] Criar o arquivo index.js, que será o arquivo de entrada do projeto.
- [x] Rodar o comando `npm init`.
- [x] **Baixar os pacotes npm:** Express e Mongoose `(--save)` e Nodemon `(--save-dev)`.
- [x] No arquivo `package.json`, fazer 2 scripts: `"start": "node src/index.js"` e `"dev": "nodemon src/index.js"`.
​
##### Configuração do src/index.js:
- [x] Fazer a importação do Express.
- [x] Fazer a inicialização de um app Express.
- [x] Usar na aplicação Express `express.json()`.
- [x] Fazer uma rota principal. [GET]
- [x] Fazer a chamada do Express para que seja inicialiado na porta 3000.
​
##### Routes
- [x] Criar um arquivo que ficará as routes.
- [x] No arquivo, fazer a importação do Express e instanciar o Router.
- [x] Fechar o código com a exportação das rotas.
​
##### Controller
- [x] Criar controller de usuários.
- [x] Importar o Mongoose.
- [x] Criar a função que faz a conexão com o banco de dados do MongoDB.
- [x] Criar a função que cria um Schema de usuários.
- [x] Criar todas as funções CRUD (createUser, readUser, updateUser, deleteUser).
- [x] Exportar todas as funções para serem usadas nas rotas.
​
#### De volta pro routes.js
- [x] Importar o controller.
- [x] Criar a rota `POST` para o método `createUser` do `controller`.
- [x] Criar a rota `GET` para o método `readUser` do `controller`.
- [x] Criar a rota `PUT` para o método `updateUser` do `controller`.
- [x] Criar a rota `DELETE` para o método `deleteUser` do `controller`.
​
##### REST Client
- [x] Fazer a requisição `POST` para o método `Create`.
- [x] Fazer a requisição `GET` para o método `Read`.
- [x] Fazer a requisição `PUT` para o método `Update`.
- [x] Fazer a requisição `DELETE` para o método `Delete`.
​
#### De volta pro index.js
- [x] Importar o arquivo de routes.
- [x] Usar na aplicação Express o routes.
​
#### Finalizando o projeto
- [x] Adicionar um `.gitignore` para ignorar o `node_modules`.
​
## Bônus:
> Aqui ficarão alguns desafios para serem feitos, podem ser adicionados novos no futuro.
​
### Fazer uma rota que procure por pessoas de A até Z
-> A ideia aqui é fazer uma rota onde seja possível pesquisar items de acordo com a letra inicial.
​
#### routes.js
- [x] Criar uma nova rota `GET` para pesquisa de A até Z.
- [x] Essa rota, deve ter um parâmetro `:letra?` para que consiga pegar através do `req.params`. O interrogação no final é para dizer que esse parâmetro é opcional, se não for passado, caso fizer uma tratativa de erro no controller, ele poderá cair nesse erro e mostrar que não foi preenchido o parâmetro.
- [x] Use, dentro da arrow function, o método que irá criar no `UsuariosController.js`, uma sugestão é um método com o nome readUserAZ, esse método deve receber como parâmetro o `req.params`.
- [x] Retorne um resultado caso positivo e outro para caso de erro.
​
#### UsuariosController.js
- [x] Criar uma função (readUserAz) que possua como parâmetro algo como `params`.
- [x] Como todos os outros métodos, verifique sobre a conexão com o banco, criação do Schema e faça o destructuring do Model `User` que está em `database.models`.
- [x] (Opcional) Faça uma verificação se foi passado algum parâmetro.
- [x] Crie uma variável para armazenar o `params.letra`:
```javascript
let letra = params.letra;
```
- [x] Crie uma variável para colocar o Regex que irá usar para a pesquisa.
```javascript
let regex = new RegExp(`^${}`, 'i');
```
- [x] Crie uma variável para armazenar a resposta da busca.
```javascript
let response = await User.find({name: regex});
```
- [x] Retorne então esse `response`.
- [x] (Opcional) Caso tenha feito a verificação de parâmetro, no `else` jogue um erro `É necessário passar uma letra como parâmetro!`:
```javascript
throw 'É necessário passar uma letra como parâmetro!';
```
​
#### api.rest
- [x] Crie mais uma rota `GET`.
- [x] O caminho deverá ser a mesma rota que passou como rota no routes.js.
- [x] No final, você pode colocar a letra que deseja buscar.
- [x] Clique em `Send Request` e veja se tudo ocorreu como esperado.
