import "./Vitrine.css";
import Bolo from "./Bolo";

function Vitrine() {
  const bolos = [
    {
      numero: 49,
      href: "https://sodiedoces.com.br/bolo/bombom-branco-trufado/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
      nome: "Bombom Branco Trufado",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49-150x150.png 150w",
      ingredientes: ["cereja", "chocolate-ao-leite", "mousse"],
    },
    {
      numero: 89,
      href: "https://sodiedoces.com.br/bolo/delicia-de-chocolate/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px.png",
      nome: "Delícia de Chocolate",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px-150x150.png 150w",
      ingredientes: ["cereja", "chocolate-ao-leite", "chocolate-meio-amargo"],
    },
    {
      numero: 163,
      href: "https://sodiedoces.com.br/bolo/bolo-pistache/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/163_bolo_pistache_235x235.png",
      nome: "Bolo Pistache",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/163_bolo_pistache_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/163_bolo_pistache_235x235-150x150.png 150w",
      ingredientes: ["pistache"],
    },
    {
      numero: 157,
      href: "https://sodiedoces.com.br/bolo/cartola/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164319/157_cartola_235x235.png",
      nome: "Cartola",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164319/157_cartola_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164319/157_cartola_235x235-150x150.png 150w",
      ingredientes: ["banana", "parmesao"],
    },
    {
      numero: 154,
      href: "https://sodiedoces.com.br/bolo/abobora-com-cocada/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164328/154_abobora_c_cocada_235x235.png",
      nome: "Abóbora com Cocada",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164328/154_abobora_c_cocada_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164328/154_abobora_c_cocada_235x235-150x150.png 150w",
      ingredientes: ["abobora", "coco", "mousse"],
    },
    {
      numero: 159,
      href: "https://sodiedoces.com.br/bolo/delicia-de-castanha-trufado/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/159_delicia-de_castanha_trufado_fatia_235x235.png",
      nome: "Delícia de Castanha Trufado",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/159_delicia-de_castanha_trufado_fatia_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164324/159_delicia-de_castanha_trufado_fatia_235x235-150x150.png 150w",
      ingredientes: ["brigadeiro", "castanha-do-para"],
    },
    {
      numero: 158,
      href: "https://sodiedoces.com.br/bolo/cupuacu-com-castanha-do-para/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164321/158_cupuacu_c_castanha_do_para_235x235.png",
      nome: "Cupuaçu com Castanha-do-Pará",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164321/158_cupuacu_c_castanha_do_para_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164321/158_cupuacu_c_castanha_do_para_235x235-150x150.png 150w",
      ingredientes: ["cupuacu", "castanha-do-para"],
    },
    {
      numero: 156,
      href: "https://sodiedoces.com.br/bolo/tapioca-com-coco-e-moca/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164317/156_tapioca_c_coco_e_moca_235x235.png",
      nome: "Tapioca com Coco e Moça®",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164317/156_tapioca_c_coco_e_moca_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164317/156_tapioca_c_coco_e_moca_235x235-150x150.png 150w",
      ingredientes: ["coco", "leite-condensado", "tapioca"],
    },
    {
      numero: 155,
      href: "https://sodiedoces.com.br/bolo/parmesao-e-doce-de-leite/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164331/155_parmesao_e_doce_de_leite_235x235.png",
      nome: "Parmesão e Doce de Leite",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164331/155_parmesao_e_doce_de_leite_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164331/155_parmesao_e_doce_de_leite_235x235-150x150.png 150w",
      ingredientes: ["doce-de-leite", "parmesao"],
    },
    {
      numero: 164,
      href: "https://sodiedoces.com.br/bolo/cuca-de-goiabada-e-moca/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164327/828_cuca_de_goiabada_e_moca_235x235.png",
      nome: "Cuca de Goiabada e Moça®",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164327/828_cuca_de_goiabada_e_moca_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/03164327/828_cuca_de_goiabada_e_moca_235x235-150x150.png 150w",
      ingredientes: ["goiabada", "leite-condensado"],
    },
    {
      numero: 162,
      href: "https://sodiedoces.com.br/bolo/bolo-ana/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/01144153/20412_imagem_site_lancamento_bolo_ana_fatia_235x235px.png",
      nome: "Bolo Ana",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/01144153/20412_imagem_site_lancamento_bolo_ana_fatia_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/04/01144153/20412_imagem_site_lancamento_bolo_ana_fatia_235x235px-150x150.png 150w",
      ingredientes: [
        "abacaxi",
        "castanha-de-caju",
        "cereja",
        "doce-de-leite",
        "marshmallow",
      ],
    },
    {
      numero: 152,
      href: "https://sodiedoces.com.br/bolo/brigadeiro-branco-com-morangos-zero-acucar/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132137/152-Brigadeiro-Branco-com-Morango-Zero-Acucar_235X235PX.png",
      nome: "Brigadeiro Branco com Morangos Zero Açúcar",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132137/152-Brigadeiro-Branco-com-Morango-Zero-Acucar_235X235PX.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132137/152-Brigadeiro-Branco-com-Morango-Zero-Acucar_235X235PX-150x150.png 150w",
      ingredientes: ["brigadeiro", "morango", "mousse"],
    },
    {
      numero: 151,
      href: "https://sodiedoces.com.br/bolo/brigadeiro-tradicional-zero-acucar/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132135/151-Brigadeiro-Tradicional-INTEIRO-IMG_6884_sismaker_235X235PX-1.png",
      nome: "Brigadeiro Tradicional Zero Açúcar",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132135/151-Brigadeiro-Tradicional-INTEIRO-IMG_6884_sismaker_235X235PX-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132135/151-Brigadeiro-Tradicional-INTEIRO-IMG_6884_sismaker_235X235PX-1-150x150.png 150w",
      ingredientes: ["brigadeiro"],
    },
    {
      numero: 129,
      href: "https://sodiedoces.com.br/bolo/chifon-zero-acucar/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132139/129-Chifon-FATIA-IMG_6885_BB_235X235PX-1.png",
      nome: "Chifon Zero Açúcar",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132139/129-Chifon-FATIA-IMG_6885_BB_235X235PX-1.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132139/129-Chifon-FATIA-IMG_6885_BB_235X235PX-1-150x150.png 150w",
      ingredientes: ["chocolate-ao-leite"],
    },
    {
      numero: 128,
      href: "https://sodiedoces.com.br/bolo/delicia-de-leite-ii-zero-acucar/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22093508/128_Delicia_leite-235x235px.png",
      nome: "Delícia de Leite II Zero Açúcar",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22093508/128_Delicia_leite-235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22093508/128_Delicia_leite-235x235px-150x150.png 150w",
      ingredientes: ["chocolate-branco", "leite-em-po"],
    },
    {
      numero: 153,
      href: "https://sodiedoces.com.br/bolo/aerado-branco-zero-acucar/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132138/153-Aerado-Branco-Zero-Acucar_235X235PX.png",
      nome: "Aerado Branco Zero Açúcar",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132138/153-Aerado-Branco-Zero-Acucar_235X235PX.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2024/01/22132138/153-Aerado-Branco-Zero-Acucar_235X235PX-150x150.png 150w",
      ingredientes: ["chocolate-branco", "mousse"],
    },
    {
      numero: 824,
      href: "https://sodiedoces.com.br/bolo/caseirinho-de-coco-com-nutella/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170006/Caseirinho-de-Coco_235x235px.png",
      nome: "Caseirinho de Coco com NUTELLA®",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170006/Caseirinho-de-Coco_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170006/Caseirinho-de-Coco_235x235px-150x150.png 150w",
      ingredientes: ["avela", "coco", "nutella"],
    },
    {
      numero: 826,
      href: "https://sodiedoces.com.br/bolo/caseirinho-crispy-com-nutella/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170004/Caseirinho-Crispy-de-Nutella_235x235px.png",
      nome: "Caseirinho Crispy com NUTELLA®",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170004/Caseirinho-Crispy-de-Nutella_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170004/Caseirinho-Crispy-de-Nutella_235x235px-150x150.png 150w",
      ingredientes: ["avela", "nutella"],
    },
    {
      numero: 825,
      href: "https://sodiedoces.com.br/bolo/caseirinho-de-pao-de-mel-com-nutella/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170009/Caseirinho-de-Pao-de-Mel_235x235px.png",
      nome: "Caseirinho de Pão de Mel com NUTELLA®",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170009/Caseirinho-de-Pao-de-Mel_235x235px.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/17170009/Caseirinho-de-Pao-de-Mel_235x235px-150x150.png 150w",
      ingredientes: ["avela", "cenoura", "nutella"],
    },
    {
      numero: 822,
      href: "https://sodiedoces.com.br/bolo/bolo-caseiro-de-cenoura-com-nutella/",
      src: "https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/822_bolo_caseiro_cenoura_c_nutella_235x235.png",
      nome: "Bolo Caseiro de Cenoura com NUTELLA®",
      srcset:
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/822_bolo_caseiro_cenoura_c_nutella_235x235.png 235w, https://cdn.sodiedoces.com.br/wp-content/uploads/2023/11/03153635/822_bolo_caseiro_cenoura_c_nutella_235x235-150x150.png 150w",
      ingredientes: ["avela", "cenoura", "nutella"],
    },
  ];

  return (
    <>
      <div
        className="container"
        style={{ marginTop: "35px", textAlign: "center" }}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="filtroIngrediente">
              {/* <p>Ou escolha seu ingrediente favorito:</p> */}
              <select
                name="filtro"
                id="filtroIngredienteTodos"
                className="filtroIngredienteTodos"
                style={{ display: "none" }}
              >
                <option value=".todosindredientes">
                  Todos os ingredientes
                </option>
                <option value=".abacaxi">Abacaxi</option>
                <option value=".aborora">Abóbora</option>
                <option value=".ameixa">Ameixa</option>
                <option value=".amendoim">Amendoim</option>
                <option value=".avela">Avelã</option>
                <option value=".baba-de-moca">Baba de Moça</option>
                <option value=".banana">Banana</option>
                <option value=".brigadeiro">Brigadeiro</option>
                <option value=".cafe">Café</option>
                <option value=".cappuccino">Cappuccino</option>
                <option value=".caramelo">Caramelo</option>
                <option value=".castanha">Castanha</option>
                <option value=".castanha-de-caju">Castanha-de-Caju</option>
                <option value=".castanha-do-para">Castanha-do-Pará</option>
                <option value=".cenoura">Cenoura</option>
                <option value=".cereja">Cereja</option>
                <option value=".chantilly">Chantilly</option>
                <option value=".chocolate-ao-leite">Chocolate ao Leite</option>
                <option value=".chocolate-branco">Chocolate Branco</option>
                <option value=".chocolate-meio-amargo">
                  Chocolate Meio Amargo
                </option>
                <option value=".coco">Coco</option>
                <option value=".cream-cheese">Cream Cheese</option>
                <option value=".crocante">Crocante</option>
                <option value=".cupuaçu">Cupuaçu</option>
                <option value=".damasco">Damasco</option>
                <option value=".doce-de-leite">Doce de Leite</option>
                <option value=".erva-doce">Erva Doce</option>
                <option value=".figo">Figo</option>
                <option value=".fuba">Fubá</option>
                <option value=".goiabada">Goiabada</option>
                <option value=".iogurte">Iogurte</option>
                <option value=".kiwi">Kiwi</option>
                <option value=".laranja">Laranja</option>
                <option value=".leite-condensado">Leite Condensado</option>
                <option value=".leite-em-po">Leite Ninho®</option>
                <option value=".limao">Limão</option>
                <option value=".limao-siciliano">Limão Sicialiano</option>
                <option value=".manga">Manga</option>
                <option value=".maracuja">Maracujá</option>
                <option value=".marshmallow">Marshmallow</option>
                <option value=".milho">Milho</option>
                <option value=".morango">Morango</option>
                <option value=".mousse">Mousse</option>
                <option value=".nozes">Nozes</option>
                <option value=".nutella">Nutella®</option>
                <option value=".pacoca">Paçoca</option>
                <option value=".pessego">Pêssego</option>
                <option value=".pimenta">Pimenta</option>
                <option value=".pistache">Pistache</option>
                <option value=".coalho">Queijo Coalho</option>
                <option value=".parmesao">Queijo Parmesão</option>
                <option value=".suspiro">Suspiro</option>
                <option value=".tapioca">Tapioca</option>
                <option value=".uva">Uva</option>
              </select>
              <select
                name="filtro"
                id="filtroIngredienteChocolate"
                className="filtroIngredienteTodos"
                style={{ display: "none" }}
              >
                <option value=".todosindredientes">
                  Todos os ingredientes
                </option>
                <option value=".amendoim">Amendoim</option>
                <option value=".avela">Avelã</option>
                <option value=".baba-de-moca">Baba de Moça</option>
                <option value=".brigadeiro">Brigadeiro</option>
                <option value=".castanha">Castanha</option>
                <option value=".castanha-de-caju">Castanha-de-Caju</option>
                <option value=".castanha-do-para">Castanha-do-Pará</option>
                <option value=".cereja">Cereja</option>
                <option value=".chocolate-ao-leite">Chocolate ao Leite</option>
                <option value=".chocolate-branco">Chocolate Branco</option>
                <option value=".chocolate-meio-amargo">
                  Chocolate Meio Amargo
                </option>
                <option value=".coco">Coco</option>
                <option value=".cream-cheese">Cream Cheese</option>
                <option value=".doce-de-leite"> Doce de Leite</option>
                <option value=".iogurte">Iogurte</option>
                <option value=".leite-condensado">Leite Condensado</option>
                <option value=".leite-em-po">Leite Ninho®</option>
                <option value=".limao">Limão</option>
                <option value=".maracuja">Maracujá</option>
                <option value=".marshmallow">Marshmallow</option>
                <option value=".morango">Morango</option>
                <option value=".mousse">Mousse</option>
                <option value=".nozes">Nozes</option>
                <option value=".nutella">Nutella®</option>
                <option value=".pacoca">Paçoca</option>
                <option value=".suspiro">Suspiro</option>
              </select>
              <select
                name="filtro"
                id="filtroIngredienteBranco"
                className="filtroIngredienteTodos"
                style={{ display: "none" }}
              >
                <option value=".todosindredientes">
                  Todos os ingredientes
                </option>
                <option value=".abacaxi">Abacaxi</option>
                <option value=".abobora">Abóbora</option>
                <option value=".ameixa">Ameixa</option>
                <option value=".amendoim">Amendoim</option>
                <option value=".avela">Avelã</option>
                <option value=".baba-de-moca">Baba de Moça</option>
                <option value=".brigadeiro">Brigadeiro</option>
                <option value=".cafe">Café</option>
                <option value=".cappuccino">Cappuccino</option>
                <option value=".caramelo">Caramelo</option>
                <option value=".castanha">Castanha</option>
                <option value=".castanha-de-caju">Castanha-de-caju</option>
                <option value=".castanha-do-para">Castanha-do-Pará</option>
                <option value=".chantilly">Chantilly</option>
                <option value=".chocolate-ao-leite">Chocolate ao Leite</option>
                <option value=".chocolate-branco">Chocolate Branco</option>
                <option value=".chocolate-meio-amargo">
                  Chocolate Meio Amargo
                </option>
                <option value=".coco">Coco</option>
                <option value=".cream-cheese">Cream cheese</option>
                <option value=".crocante">Crocante</option>
                <option value=".cupuaçu">Cupuaçu</option>
                <option value=".damasco">Damasco</option>
                <option value=".doce-de-leite">Doce de Leite</option>
                <option value=".figo">Figo</option>
                <option value=".goiabada">Goiabada</option>
                <option value=".iogurte">Iogurte</option>
                <option value=".kiwi">Kiwi</option>
                <option value=".leite-condensado">Leite Condensado</option>
                <option value=".leite-em-po">Leite Ninho®</option>
                <option value=".limao">Limão</option>
                <option value=".limao-siciliano">Limão Siciliano</option>
                <option value=".manga">Manga</option>
                <option value=".maracuja">Maracujá</option>
                <option value=".marshmallow">Marshmallow</option>
                <option value=".morango">Morango</option>
                <option value=".mousse">Mousse</option>
                <option value=".nozes">Nozes</option>
                <option value=".nutella">Nutella®</option>
                <option value=".pessego">Pêssego</option>
                <option value=".pimenta">Pimenta</option>
                <option value=".pistache">Pistache</option>
                <option value=".coalho">Queijo Coalho</option>
                <option value=".parmesao">Queijo Parmesão</option>
                <option value=".suspiro">Suspiro</option>
                <option value=".tapioca">Tapioca</option>
                <option value=".uva">Uva</option>
              </select>
              <select
                name="filtro"
                id="filtroIngredienteZero"
                className="filtroIngredienteTodos"
                style={{ display: "none" }}
              >
                <option value=".todosindredientes">
                  Todos os ingredientes
                </option>
                <option value=".abacaxi">Abacaxi</option>
                <option value=".amendoim">Amendoim</option>
                <option value=".chocolate-ao-leite">Chocolate ao leite</option>
                <option value=".chocolate-branco">Chocolate branco</option>
                <option value=".coco">Coco</option>
                <option value=".damasco">Damasco</option>
                <option value=".kiwi">Kiwi</option>
                <option value=".maracuja">Maracujá</option>
                <option value=".morango">Morango</option>
                <option value=".mousse">Mousse</option>
                <option value=".nozes">Nozes</option>
                <option value=".pessego">Pêssego</option>
                <option value=".uva">Uva</option>
              </select>
              <select
                name="filtro"
                id="filtroIngredienteCaseiros"
                className="filtroIngredienteTodos"
                style={{ display: "none" }}
              >
                <option value=".todosindredientes">
                  Todos os ingredientes
                </option>
                <option value=".abacaxi">Abacaxi</option>
                <option value=".banana">Banana</option>
                <option value=".cenoura">Cenoura</option>
                <option value=".coco">Coco</option>
                <option value=".erva-doce">Erva Doce</option>
                <option value=".fuba">Fubá</option>
                <option value=".goiabada">Goiabada</option>
                <option value=".laranja">Laranja</option>
                <option value=".leite-em-po">Leite Ninho®</option>
                <option value=".limao">Limão</option>
                <option value=".maracuja">Maracujá</option>
                <option value=".milho">Milho</option>
                <option value=".nutella">Nutella®</option>
              </select>
            </div>
          </div>

          <div className="col-md-12 mt-4">
            <div className="row todosbolos-lista">
              {bolos.map((bolo) => (
                <Bolo key={bolo.numero} bolo={bolo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vitrine;
