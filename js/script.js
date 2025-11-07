/*aqui estrutura em JavaScript para validação do formulario */

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleTheme");
  const form = document.getElementById("formContato");
  const links = document.querySelectorAll("nav a");
  const secoes = document.querySelectorAll(".secao");
  const mensagemSucesso = document.getElementById("mensagemSucesso");

  // ======== tema claro ou escuro ========
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.body.classList.add("dark");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      
      const temaAtual = document.body.classList.contains("dark")
        ? "escuro"
        : "claro";
      localStorage.setItem("tema", temaAtual);
    });
  }

  // ======== navegaçao =======
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

     
      links.forEach((l) => l.classList.remove("ativo"));
      link.classList.add("ativo");

     
      secoes.forEach((sec) => sec.classList.remove("ativa"));

     
      const destino = document.querySelector(link.getAttribute("href"));
      destino.classList.add("ativa");

      
      destino.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // ======== formulario de contato ========
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Mostra a mensagem enviada
      if (mensagemEnviada) {
        mensagemEnviada.style.display = "block";
        mensagemEnviada.style.opacity = "1";
        mensagemEnviada.textContent = "Mensagem enviada com sucesso!";
      } else {
        alert("Mensagem enviada com sucesso!");
      }

      // Limpa todo o formulário
      form.reset();

      
      if (mensagemEnviada) {
        setTimeout(() => {
          mensagemEnviada.style.opacity = "0";
          setTimeout(() => {
            mensagemEnviada.style.display = "none";
          }, 500);
        }, 4000);
      }
    });
  }
});
