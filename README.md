# Teste avaliativo - indra
<h3>Especificações do projeto</h3>
    <ul>
        <li>Desenvolvimento de uma aplicação simples em Angular 5 ou superior</li>
        <li>Uso de reactive forms</li>
        <li>Listagem de itens dinamicamente</li>
        <li>Consumo de API externa</li>
    </ul>
# Como rodar a aplicação em sua máquina?

- No diretório da sua preferencia Clone o repositório usando o seguinte comando em seu terminal:
   git clone https://github.com/andrea-brito/Teste-angular9.git

- Em seguida em seu terminal digite o comando:
    npm install 
com isso você estará baixando todas as dependencias do projeto

- Em um terminal em separado mas no mesmo diretório use o comando:
     json-server --watch src/assets/data/db.json
com ele você vai startar a lista de generos dos livros dinâmicamente

- No primeiro terminal digite o comando:
    ng serve --open ou npm start como preferir 
com esses comandos você vai startar o projeto e abrir automaticamente o browser 

<h3>Informações importantes<h3>

- Era de livre escolha a API externa a ser consumida então 
eu optei por escolhar a seguinte API: https://restcountries.eu/rest/v2/name/united
que é uma API de listagem de países. 

- Alguns item da especificação não estavam bem elaborados mas eu fiz de acordo com o meu entendimento 
do que era proposto .