let currentStep = 1;
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
var modal = document.getElementById("modal");
var linkConvite = document.getElementById("linkConvite");

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function shareWhatsApp() {
  var linkConvite = document.getElementById("linkConvite").value;
  var whatsappURL =
    "https://api.whatsapp.com/send?text=" + encodeURIComponent(linkConvite);
  window.open(whatsappURL, "_blank");
}

function handleSubmit(event) {
  event.preventDefault();

  var formData = {
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    cpf: document.getElementById("cpf").value,
    email_amigo: document.getElementById("email_amigo").value,
  };

  // fetch("http://localhost", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(formData),
  // })
  //   .then((response) => {
  //     if (response.ok) {
  linkConvite.value = "bit.ly/Arena7";
  modal.style.display = "block";
  //   } else {
  //     console.error("Ocorreu um erro ao enviar o formulário.");
  //   }
  // })
  // .catch((error) => {
  //   console.error("Erro de rede:", error);
  // });
}

form1.addEventListener("submit", handleSubmit);
form2.addEventListener("submit", handleSubmit);
