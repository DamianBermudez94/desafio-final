function contactComponet(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = ` <section class="container__formulario">
    <h2 class="container__formulario-title">Contacto</h2>
    <form class="container__form" action="">
        <label for="">
            <p class="form-title">Nombre</p>
            <input id="nombre" class="label-input" type="text">
        </label>
        <label for="">
            <p class="form-title">Email</p>
            <input id="email" class="label-input" type="text">
        </label>
        <label for="">
            <p class="form-title">Nombre</p>
            <textarea id="textarea" class="label-input textarea" name="" id=""></textarea>
        </label>
        <div class="container__button-enviar">
            <button class="btn-enviar">Enviar</button>
        </div>
    </form>
  </section>
     `;

  el.appendChild(componentEl);
}
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

function contacto() {
  const form = document.querySelector(".container__form");
  form.addEventListener("submit", (res) => {
    res.preventDefault();
    let objetoForm = res.target;
    let nombre = objetoForm.nombre.value;
    let email = objetoForm.email.value;
    let textarea = objetoForm.textarea.value;

    let mensaje = `nombre: ${nombre} 
        email: ${email}
        mensaje:${textarea}`;

    let datos = {
      to: "bermudezdamian7@gmail.com",
      message: mensaje,
    };
    postData("https://apx-api.vercel.app/api/utils/dwf", datos).then((data) => {
      console.log(data);
    });
  });
}
