let Projetos = [{
  'nome': "default",
  'defaultp': function () {
    $(".visor").append(`      <div class="content">
          <div class="info" style="font-size:30px;">
            <p><i class="fa-solid fa-angle-up"></i></p>
            <p>Use os direcionais ao lado para mudar de projeto</p>
            <p>Mais projetos no <a href="https://github.com/Joao-vls" target="_blank"><i class="fa-brands fa-github"></i></a><p>
            <p><i class="fa-solid fa-angle-down"></i></p>
            <p style="font-size:100px;">
              <i class="fa-solid fa-computer"></i>
            </p>
          </div>
        </div>
      `);
  }
}, {
  'nome': "Domino",
  'descricao': "Jogo de Domino feito com javascript",
  'link': "https://joao-vls.github.io/jogo-domino-js-html/domino.html",
  'status': "Completo"
},
{
  'nome': "One",
  'descricao': "Layout semelhante ao spotify",
  'link': "https://joao-vls.github.io/one_layout_spotify/",
  'status': "Completo"
},
{
  'nome': "Storm",
  'descricao': "Projeto de rede social semelhante ao twitter com PHP",
  'link': "https://joao-vls.github.io/storm/versao_sem_BD/",
  'status': "Incompleto"
},
{
  'nome': "DriveOn",
  'descricao': "teste layout com grid",
  'link': "https://joao-vls.github.io/driveon/",
  'status': "Completo"
},
{
  'nome': "pokedex",
  'descricao': "pokedex feito no bootcamp da dio",
  'link': "https://joao-vls.github.io/js-developer-pokedex/",
  'status': "Completo"
},
{
  'nome': "Jquery quizz",
  'descricao': "Jogo de quizz sobre o Jquery feito em grupo",
  'link': "https://joao-vls.github.io/jquery_quizz/",
  'status': "Completo"
},
{
  'nome': "Consultorio",
  'descricao': "Projeto de consultorio medico que gerencia consultas e entrega resultados de consultas",
  'disponivel': `https://github.com/Joao-vls/consultorio-Php--incompleto--`,
  'status': "Incompleto"
},
{
  'nome': "Exercicio 1",
  'descricao': "Exercicio de carroseis",
  'link': "https://joao-vls.github.io/testes/arrayobjetos/arob.html",
  'status': "Completo"
},
{
  'nome': "Exercicio 2",
  'descricao': "Exercicio sobre imagens,iframes,e tags",
  'link': "https://joao-vls.github.io/testes/continente/index.html",
  'status': "Completo"
},
{
  'nome': "Exercicio 3",
  'descricao': "Exercicio sobre trocar de modo claro para escuro,calculadora e busca interna",
  'link': "https://joao-vls.github.io/testes/mudar-modo-calculo-busca-interna/1pg.html",
  'status': "Completo"
},
{
  'nome': "Textos(artigos)",
  'descricao': "textos,artigos e projetos, produzidos",
  'pdfs': [{ 'nome': "BOAS PRATICAS PARA GARANTIR A SEGURANÇA DAS INFORMAÇÕES.", 'link': "./pdfs/sergurancainfo.pdf", 'descricao': "Artigo desenvolvido para a disciplina de metodologia de pesquisa" }]
},
{
  'nome': "Videos editados",
  'descricao': "videos editados por mim",
  'videos': [{'nome':"internet ifnmg",'link': "https://www.instagram.com/reel/CuAJxAlufCw/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}]
},
{
  'nome': "imagens(design)",
  'descricao': "imagens e design produzidos",
  'imagens': [{'link': "./img/imagens/convite.png"},{'link': "./img/imagens/2.png"}
  ,{'link': "./img/imagens/6.png"},{'link': "./img/imagens/10.png"},{'link': "./img/imagens/acolhe.png"},
  {'link': "./img/imagens/fazen.png"},{'link': "./img/imagens/MINICURSO.png"},{'link': "./img/imagens/yot.png"},
  {'link': "./img/imagens/BASQUETE.png"},{'link': "./img/imagens/engaged!.png"},{'link': "./img/imagens/FORMAAMAR.png"},
  {'link': "./img/imagens/Local.png"},]
},
{
  'nome': "logos",
  'descricao': "logos produzidos",
  'logos': [{'link': "./img/logos/1.png"},{'link': "./img/logos/2.png"},{'link': "./img/logos/3.png"},
  {'link': "./img/logos/4.png"},{'link': "./img/logos/5.png"},{'link': "./img/logos/6.png"},{'link': "./img/logos/7.png"},{'link': "./img/logos/8.png"},{'link': "./img/logos/9.png"}]}
];
let pessoa = {
  'nome': "João vitor leite de silva",
  'nascimento': "04/04/2003",
  'idade': function () {
    var ano = 2003, dia = 4, mes = 4;
    var atual = new Date();
    var idade = new Date(ano, mes - 1, dia);
    var aid = atual - idade;

    return Math.floor(aid / (1000 * 60 * 60 * 24 * 365.25));
  },
  'cidades': [{ 'nome': "São Paulo-SP", 'descricao': "Local Nascimento" }, { 'nome': "Januaria-MG", 'descricao': "Local atual" }],
  'cursos': [{ 'nome': "Bacharelado em sistema da Informação", 'local': "IFNMG-campus Januaria", 'ini_fim': "2021,2025" },
  { 'nome': "Machine Learning e Data Science com Python de A a Z", 'local': "Udemy", 'ini_fim': "2023,2023" }
  ]
};
let conhecimentos = {
  'linguagenp': [{ 'nome': "Javascript", 'nivel': 7 },
  { 'nome': "C/C++", 'nivel': 4 },
  { 'nome': "PHP", 'nivel': 6 },
  { 'nome': "R", 'nivel': 2 },
  { 'nome': "Python", 'nivel': 2 },
  { 'nome': "Java", 'nivel': 1 }
  ],
  'bancodedados': [{ 'nome': "Mysql", 'nivel': 6 }, { 'nome': "orientdb", 'nivel': 4 }, { 'nome': "counchdb", 'nivel': 4 }],
  'linguas': [{ 'nome': "Inglês", 'nivel': 2 }, { 'nome': "Espanhol", 'nivel': 5 }],
  'tecnicos': [
    { 'nome': "Manutenção e montagem de eletronicos", 'nivel': 7 },
    { 'nome': "Canva", 'nivel': 10 },
    { 'nome': "Edição de video", 'nivel': 7 },
    { 'nome': "Edição de imagem", 'nivel': 9 },
    { 'nome': "Edição de audio", 'nivel': 7 },
    { 'nome': "Engenharia de software", 'nivel': 9, 'descricao': "metodologias ageis como kamban e scrum e outras tecnicas de desenvolvimento" },
    { 'nome': "Algoritmos", 'nivel': 10 },
    { 'nome': "Estrutura de dados", 'nivel': 8 },
    { 'nome': "Redes neurais", 'nivel': 2 }
  ]
};
let contatos = {
  'Linkedin': { 'link': "https://www.linkedin.com/in/joão-vitor-leite-363855231/", 'logo': `<i class="fa-brands fa-linkedin"></i>` },
  'Github': { 'link': "https://github.com/Joao-vls", 'logo': `<i class="fa-brands fa-github"></i>` },
  'Instagram': { 'link': "https://www.instagram.com/dev.leite/", 'logo': `<i class="fa-brands fa-square-instagram"></i>` },
  'Twitter': { 'link': "https://twitter.com/desleite", 'logo': `<i class="fa-brands fa-square-twitter"></i>` },
  'Email': { 'link': "mailto:joa.v55j@gmail.com", 'logo': `<i class="fa-solid fa-envelope"></i>` },
  'Telefone': { 'link': "tel:+5538992146362", 'logo': `<i class="fa-solid fa-phone"></i>` },
};
