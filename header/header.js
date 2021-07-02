function headertComponet(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `<div class="container__header">
    <a class="container__header-title" href="./index.html">DB|Weg-design</a>
    <button class="btn-menu" id="btn-menu"><i class="fas fa-bars"></i></button>
    <nav class="container__menu">
        <ul class="container__menu-link">
            <a href="./portafolio.html" class="link-menu">Portafolio</a>
            <a href="./servicios.html" class="link-menu">Servicios</a>
            <a href="./contacto.html" class="link-menu">Contacto</a>
        </ul>
    </nav>
   
</div>
       `;

  el.appendChild(headerEl);
  console.log("sadasdasd", headerEl);
}

// Animacion del menu
function menu() {
  let btnMenu = document.querySelector("#btn-menu");
  let menu = document.querySelector(".container__menu");

  let activador = true;

  btnMenu.addEventListener("click", function () {
    document.querySelector("#btn-menu i").classList.toggle("fa-times");
    if (activador) {
      menu.style.left = "0";
      menu.style.transition = "0.6s";
      activador = false;
    } else {
      activador = false;
      menu.style.left = "-100%";
      menu.style.transition = "0.6s";
      activador = true;
    }
  });
  console.log("sadDasdAS", btnMenu);
}
