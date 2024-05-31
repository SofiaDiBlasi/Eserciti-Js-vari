document.addEventListener('DOMContentLoaded' , ()=>{

    const formLilla = document.forms.formLilla;
    const nome = formLilla.nome;
    const cognome = formLilla.cognome;
    const email = formLilla.email;
    const password = formLilla.password;

    formLilla.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = {
            nome: nome.value,
            cognome: cognome.value,
            email: email.value,
            password: password.value,
        }

        console.log(formData);
    })

})