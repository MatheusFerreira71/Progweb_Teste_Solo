<h1>Instalação</h1>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a>: versão >= 12.16</li>
    <li><a href="https://yarnpkg.com/">Yarn</a>: versão >= 1.22</li>
    <li><a href="https://code.visualstudio.com/">Visual Studio Code</a>: versão >= 1.42</li>
    <li><a href="https://www.mongodb.com/">MongoDB</a>: versão >= 4.2.3</li>
</ul>

Tenha certeza que o mongo está ativo no seus serviços.

Crie uma pasta raiz do projeto, sem espaços em seu caminho e em seu nome, também tenha certeza de que seu 
usuário esteja sem caracteres especiais e espaço.

Crie uma pasta dentro da pasta raiz, agora já podemos usar o terminal do visual studio code para podermos passar nossos comandos. A pasta pode ser um nome que lembre o backend de um projeto, no meu caso, usei server.
Não se esqueça de entrar dentro da pasta criada, pois apartir de agora tudo será feito dentro dela.
Use cd "nome" para poder acessar a pasta no terminal.

<h1>Instalçao de Pacotes</h1>
Iremos instalar alguns pacotes necessários para o servidor ficar operacional, para isso iremos usar o express.
Execute os comandos na ordem.
<ul>
    <li>npx express-generator . --no-view</li>
    <li>yarn set version berry</li>
    <li>yarn install</li>
    <li>yarn start</li>
</ul>

Apartir daqui seu projeto estara no ar, para finalizá-lo aperte ctrl + c em seu terminal e em seguida S, ele será finalizado. 

<h1>Configurando a conexão com o Banco</h1>

Special Thanks to <a href="https://github.com/faustocintra">Fausto Cintra</a> que forneceu seu conhecimento para nós.