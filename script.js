document.getElementById("btnwhatsapp").addEventListener("click", () => {

    // numero ofoscado
    const segredo = "NTUxNDk4ODI3NjE3NA==";

    // decodificar o numero
    const telefone = atob(segredo);

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});