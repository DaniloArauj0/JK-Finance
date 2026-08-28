const typed = new Typed(".teste", {
    strings: ["JK FINANCE", "INVESTINDO NOS SEUS SONHOS"],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1200,      // pausa antes de apagar
    loop: true,
    showCursor: false  // Oculta o cursor de digitação
});


const typed2 = new Typed(".segundo-text-digitavel", {
    strings: ["teste 01", "texto digitavel"],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1200,      // pausa antes de apagar
    loop: true,
    showCursor: false  // Oculta o cursor de digitação
});



// seleciona o botão de menu (icone de amburgue) pelo id definido no HTML
const menuBtn = document.querySelector(".menu-btn");

// seleciona o elemento de navegação (menu) (será aberto ou fechado)
const navMenu = document.getElementById("nav-menu");

// dentro do botão, procura o elemento <i> icone da font-awesome 
const menuIcon = menuBtn.querySelector("i");
// querySelector() -> metodo reservado do javascript p buscar

// getElementById() -> serve p achar uma coisa especifica que tem ID

// querySelector() -> serve p achar uma coisa -> Seja por classe, por ID, por tag. Em qualquer lugar da página. Ele vai procurar em qualquer lugar da página, mas o getElementById() só vai procurar no ID que você definiu.

// Adiciona um "ouvinte de evento" (listerner) que o clique do botão menu.
menuBtn.addEventListener("click", () => {
    // addEventListener() -> metodo reservado para executar uma função
    // toda vez q um evento especifico ocorre (neste caso um clique).
    // Alterna (liga e desliga) a clsse "show" no menu de navegação
    // Isso faz o menu aparecer ou desaparecer manualmente via CSS
    navMenu.classList.toggle('show');
    // classeList.toggle()-> adiciona a classe se ela nao existir remove se ela existir.
    // troca o icone (de amburgue para 'X' e vice e versa) dependendo do estado atual
    // verifica se o icone atual tem a classe "fa-bars" (icone de amburgue)
    if (menuIcon.classList.contains("fa-bars")) {
        classList.contains() -> verifica se o elemento tem a classe especificada.Retorna true ou false.
            menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmarr")
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.add('fa-bars');
    }
});
// começando o carrosselabaixo:
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,   // mostra 3 img por vez
    spaceBetween: 20,   // espaçamento entre elas
    loop: true,
    // autoplay: carrocel funciona sozinho
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Responsividade
    breakpoints: {
        0: { slidesPerView: 1 },   // mobile
        600: { slidesPerView: 2 },   // tablet
        900: { slidesPerView: 3 }    // desktop
    }
});