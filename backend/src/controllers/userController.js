const userService = require("../services/userServices");

const login = async (request, response) => {
    const token = await userService.login(request.body);
    response.cookie(
        "token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax"
        }
    )

    return response.status(200).json({ message: "Sucesso" });
}

const createUser = async (request, response) => {
    const newUser = await userService.createUser(request.body);
    return response.status(200).json(newUser);
}

module.exports = {
    login,
    createUser,
}