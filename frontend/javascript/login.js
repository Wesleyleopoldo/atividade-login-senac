async function login(event) {
    event.preventDefault();
    const login = document.getElementById("usuario").value;
    const password = document.getElementById("senha").value;

    try {
        const response = await fetch("http://localhost:3333/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ login, password })
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
                text: `sucesso!!!`
            });

            window.location.href = "./home.html"
            
        }
    } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Não foi possível realizar o login: " + err.message
        });
    }
}





const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", login);