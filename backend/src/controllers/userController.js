const userService = require("../services/userServices");

const login = async (request, response) => {
    const token = await userService.login(request.body);
    return response.status(200).json(token);
}

const createUser = async (request, response) => {
    const newUser = await userService.createUser(request.body);
    return response.status(200).json(newUser);
}

module.exports = {
    login,
    createUser,
}