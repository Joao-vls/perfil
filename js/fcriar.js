function dialogo(frases) {

  for (var i = 0; i < frases.length; i++) {
    var des = $(".descr:eq(" + i + ")");
    des.data("frase", frases[i]);
    des.hover(function (e) {
      $("body").append(`<div class="caixa-di">
      `+ $(this).data("frase") + `
      </div>`);
      $(".caixa-di").css({ left: (e.clientX - 30) + "px", top: (e.clientY + 20) + "px" })
    },
      () => {
        $(".caixa-di").remove();
      });

  }
}
function multitexto(textos, ref) {
  let tx = [''];
  for (let i = 0; i < textos.length; i++) {
    tx[0] += textos[i][ref[0]] + '<span class="descr" >?</span></br>';
    if (ref[1]) {
      tx[1 + i] = textos[i][ref[1]] + '</br>' + textos[i][ref[2]];
    }
  }
  return tx;
}
function info_pessoa() {
  let spcurso = multitexto(pessoa.cursos, ref = ['nome', 'local', 'ini_fim']);
  $(".content")?.remove();
  $(".projeto-carrosel")?.remove();
  $(".visor").append(`<div class="content">
  <div class="nome">
  <h2>Nome:</h2>
  <p>`+ pessoa.nome + `</p>
  </div>
  <div class="ida">
  <h2>Idade:</h2>
  <p>`+ pessoa.idade() + `<span class="descr" > ?</span> </p>
  </div>
  <div class="cidades" >
  <h2>Cidades:</h2>
  <p>`+ pessoa.cidades[1].nome + ` <span  class="descr" >?</span> || ` + pessoa.cidades[0].nome + ` <span class="descr" style="color: yellow;">?</span></p>
  </div>
  <div class="curs">
  <h2>Cursos:</h2>
  <p>`+ spcurso[0] + `</p>
  </div>
  </div>`);
  spcurso.shift();
  console.log(spcurso);
  let frases = [pessoa.nascimento, pessoa.cidades[1].descricao, pessoa.cidades[0].descricao];
  spcurso.forEach(element => {
    frases.push(element);
  });
  dialogo(frases);
}
function redes() {
  $(".content")?.remove();
  $(".projeto-carrosel")?.remove();
  $(".visor").append(`    <div class="content">
  <div class="grid">
  </div>

  </div>`)
  for (const chave in contatos) {
    $(".grid").append(`
      <a target="_blank" href="`+ contatos[chave].link + `" class="rede">
      <p style="font-size:20px">`+ chave + `</p>
      <p>` + contatos[chave].logo + `</p>
      </a>
      `);
  }
}
function conheci() {
  $(".content")?.remove();
  $(".projeto-carrosel")?.remove();
  $(".visor").append(`
      <div class="content">
      <table>
      <thead>
      <tr>
      <th>Linguagens De programação</th>
      <th>Banco De Dados</th>
      <th>Linguas Extrangeiras</th>
      <th>Tecnicos</th>
      </tr>
      </thead>
      <tbody>
      </tbody>
      </table>
      </div>
      `);
  var nv10 = `<div class="nivel">
      <i class="fa-regular fa-thumbs-down"></i>
      <div class="nv1a10 nv1"></div>
      `;
  for (var i = 0; i < 8; i++) {
    nv10 += `<div class="nv1a10"></div>
        `;
  }
  nv10 += `<div class="nv1a10 nv10"></div>
      <i class="fa-regular fa-thumbs-up"></i></div>`;
  var cl = [], frases = [], nv = [], c = 0, li = 0;
  for (const chave in conhecimentos) {
    cl.push([]);
    nv.push([]);
    li = (li < conhecimentos[chave].length) ? conhecimentos[chave].length : li;
    for (var i = 0; i < conhecimentos[chave].length; i++) {

      var conte = conhecimentos[chave][i].nome;
      if (conhecimentos[chave][i]?.descricao) {
        frases.push(conhecimentos[chave][i].descricao);
        conte += ` <span class="descr" >?</span>`;
      }
      cl[c][i] = conte;
      nv[c][i] = conhecimentos[chave][i].nivel
      $("tbody").append('<tr></tr>');
    }
    c++;
  }
  for (var i = 0; i < li; i++) {
    for (var o = 0; o < c; o++) {
      if (cl[o][i]) {

        $("tbody  tr:eq(" + i + ")").append(`
              <td>`+ (cl[o][i] + nv10) + `</td>
              `);

        for (var n = 0; n < nv[o][i]; n++) {
          $("tbody  tr:eq(" + i + ") td:eq(" + o + ") .nv1a10:eq(" + n + ")").css('background-color', "var(--cor-" + (n + 1) + ")");
        }
      } else {
        $("tbody  tr:eq(" + i + ")").append(`
                <td></td>
                `);
      }

    }
  }
  dialogo(frases)
}
let carroselatual = 0;
function projetcriar() {
  var frases = [];
  $(".projeto-carrosel p").text(Projetos[carroselatual].nome)
  if (Projetos[carroselatual]?.defaultp) { Projetos[0].defaultp(); }
  if (Projetos[carroselatual]?.link) {
    $(".visor").append(`
              <div class="content">
              <iframe src="`+ Projetos[carroselatual].link + `" style="position:absolute;left:0;" width="99.5%" height="100%"></iframe>
              </div>
              `)
    $(".projeto-carrosel p").append(`<span class="descr" >?</span>`)
    frases.push(Projetos[carroselatual].descricao + "<br>" + "Status: " + Projetos[carroselatual].status);
  }
  if (Projetos[carroselatual]?.disponivel) {
    $(".visor").append(`    <div class="content">
              <div class="info" style="font-size:30px;">
              <h2>`+ Projetos[carroselatual].nome + `</h2>
              <p>`+ Projetos[carroselatual].descricao + `</p>
              <p>Visualização indisponivel link abaixo para o repositorio</p>
              <p><i class="fa-solid fa-angle-down"></i></p>
              <a href="`+ Projetos[carroselatual].disponivel + `" style="font-size:100px;">
              <i class="fa-brands fa-github"></i>
              </a>
              </div>
              </div>`)
  }
  if (Projetos[carroselatual]?.pdfs) {
    $(".visor").append(`    <div class="content">
              <div class="grid">
              </div>

              </div>`)
    for (var i = 0; i < Projetos[carroselatual].pdfs.length; i++) {
      $(".grid").append(`<div class="pdim"> <p>` + Projetos[carroselatual].pdfs[i].nome + `<span class="descr" > ?</span></p> <a target="_blank" href="` + Projetos[carroselatual].pdfs[i].link + `"><i class="fa-solid fa-book"></i></a></div>`)
      frases.push(Projetos[carroselatual].pdfs[i].descricao);

    }
  }
  if (Projetos[carroselatual]?.imagens) {
    $(".visor").append(`    <div class="content">
    <div class="grid">
    </div>
    
    </div>`)
    for (var i = 0; i < Projetos[carroselatual].imagens.length; i++) {
      $(".grid").append(`<div class="pdim" ><img style="float:left; width:100px; height:100px" src="` + Projetos[carroselatual].imagens[i].link + `"> <button  type="button" style="width:100px; height:100px; float: right;"  ><i class="fa-solid fa-maximize"></i></button> </div>`);
      $(".pdim button:eq(" + i + ")").click(function () {
        $("body").append(`  <div class="imagem-grande">
        <button class="mop" style="text-align: center; background: none; border: none; cursor: pointer;"><i class="fa-solid fa-rectangle-xmark"></i></button>
        <img class="imagem" src=""></div>
      </div>`);
        $(".imagem").attr("src",$(this).siblings("img").attr("src"));
        $(".mop").click(() => {
          $(".imagem-grande").remove();
        });
        
      });
    }
  }
  return frases;
}
function cproject() {
  $(".content")?.remove();
  $(".projeto-carrosel")?.remove();
  Projetos[0].defaultp();
  $(".opcoes").append(`
              <div class="projeto-carrosel">
              <button type="button" name="p-up"><i class="fa-solid fa-angle-up"></i></button>
              <p>Default</p>
              <button type="button" name="p-down"><i class="fa-solid fa-angle-down"></i></button>

              </div>
              `);
  $('button[name="p-up"]').click(() => {
    $(".content")?.remove();
    carroselatual = (carroselatual == Projetos.length - 1) ? 0 : carroselatual + 1;
    dialogo(projetcriar());
  });
  $('button[name="p-down"]').click(() => {
    $(".content")?.remove();
    carroselatual = (carroselatual == 0) ? Projetos.length - 1 : carroselatual - 1;
    dialogo(projetcriar());
  });
}
