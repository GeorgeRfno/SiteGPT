
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
