function cadastrarSe() {
    const name = document.getElementById("nome").value;
    const login = document.getElementById("usuario").value;
    const password = document.getElementById("senha").value;

    try {
        const response = fetch("http://localhost:3333/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, login, password})
        });
    } catch (err) {
    }
}