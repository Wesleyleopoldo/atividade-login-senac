async function cadastrarSe(event) {

    event.preventDefault();
    const name = document.getElementById("nome").value;
    const login = document.getElementById("usuario").value;
    const password = document.getElementById("senha").value;

    try {
        const response = await fetch("http://localhost:3333/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, login, password })
        });

        if(!response.ok) {
            const data = await response.json();
            Swal.fire({
                icon: "error",
                title: "Erro",
                text: data.message
            });

        } else {
            const data = await response.json();
            const { name } = data;

            Swal.fire({
                icon: "success",
                title: "Sucesso",
                text: `Usuário ${name} cadastrado com sucesso!!!`
            });

            window.location.href = "./login.html"
            
        }
    } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Não foi possível realizar o cadastro: " + err.message
        });
    }
}

const formCadastro = document.getElementById("form-cadastro");

formCadastro.addEventListener("submit", cadastrarSe);