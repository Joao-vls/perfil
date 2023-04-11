let Projetos=[{
  'nome':"default",
  'defaultp': function(){ $(".visor").append(`      <div class="content">
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
},{
  'nome':"Domino",
  'descricao':"Jogo de Domino feito com javascript",
  'link': "https://joao-vls.github.io/jogo-domino-js-html/domino.html",
  'status':"Completo"
},
{
  'nome':"One",
  'descricao':"Layout semelhante ao spotify",
  'link': "https://joao-vls.github.io/one_layout_spotify/",
  'status':"Completo"
},
{
  'nome':"Storm",
  'descricao':"Projeto de rede social semelhante ao twitter com PHP",
  'link': "https://joao-vls.github.io/storm-2023/versao_sem_BD/",
  'status':"Incompleto"
},
{
  'nome':"Jquery quizz",
  'descricao':"Jogo de quizz sobre o Jquery feito em grupo",
  'link': "https://joao-vls.github.io/jquery_quizz/",
  'status':"Completo"
},
{
  'nome':"Consultorio",
  'descricao':"Projeto de consultorio medico que gerencia consultas e entrega resultados de consultas",
  'disponivel': `https://github.com/Joao-vls/consultorio-Php--incompleto--`,
  'status':"Incompleto"
},
{
  'nome':"Exercicio 1",
  'descricao':"Exercicio de carroseis",
  'link': "https://joao-vls.github.io/testes/arrayobjetos/arob.html",
  'status':"Completo"
},
{
  'nome':"Exercicio 2",
  'descricao':"Exercicio sobre imagens,iframes,e tags",
  'link': "https://joao-vls.github.io/testes/continente/index.html",
  'status':"Completo"
},
{
  'nome':"Exercicio 3",
  'descricao':"Exercicio sobre trocar de modo claro para escuro,calculadora e busca interna",
  'link': "https://joao-vls.github.io/testes/mudar-modo-calculo-busca-interna/1pg.html",
  'status':"Completo"
},
{
  'nome':"Textos(artigos)",
  'descricao':"textos,artigos e projetos, produzidos",
  'pdfs':[{'nome':"BOAS PRATICAS PARA GARANTIR A SEGURANÇA DAS INFORMAÇÕES.",'link':"./pdfs/sergurancainfo.pdf",'descricao':"Artigo desenvolvido para a disciplina de metodologia de pesquisa"}]
}
];
let pessoa={
  'nome':"João vitor leite de silva",
  'nascimento':"04/04/2003",
  'idade':20,
  'cidades':[{'nome':"São Paulo-SP",'descricao':"Local Nascimento"},{'nome':"Januaria-MG",'descricao':"Local atual"}],
  'cursos':[{'nome':"Bacharelado em sistema da Informação",'local':"IFNMG-campus Januaria",'ini_fim':"2021,2025"}
]
};
let conhecimentos={
  'linguagenp':[{'nome':"Javascript",'nivel':7},
  {'nome':"C/C++",'nivel':4},
  {'nome':"PHP",'nivel':6},
  {'nome':"R",'nivel':2},
  {'nome':"Python",'nivel':2},
  {'nome':"Java",'nivel':1}
],
  'bancodedados':[{'nome':"Mysql",'nivel':6},{'nome':"orientdb",'nivel':4},{'nome':"counchdb",'nivel':4}],
  'linguas':[{'nome':"Inglês",'nivel':2},{'nome':"Espanhol",'nivel':5}],
  'tecnicos':[
  {'nome':"Manutenção e montagem de eletronicos",'nivel':7},
  {'nome':"Engenharia de software",'nivel':9,'descricao':"metodologias ageis como kamban e scrum e outras tecnicas de desenvolvimento"},
  {'nome':"Algoritmos",'nivel':10},
  {'nome':"Estrutura de dados",'nivel':8},
  {'nome':"Redes neurais",'nivel':2}
  ]
};
let contatos={
  'Instagram':{'link':"https://www.instagram.com/joa.vls/",'logo':`<i class="fa-brands fa-square-instagram"></i>`},
  'Twitter':{'link':"https://twitter.com/joa_vvv",'logo':`<i class="fa-brands fa-square-twitter"></i>`},
  'Github':{'link':"https://github.com/Joao-vls",'logo':`<i class="fa-brands fa-github"></i>`},

};
