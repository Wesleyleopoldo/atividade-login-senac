const bcrypt = require("bcryptjs");
const { User } = require("../resources/db");
const createUserDTO = require("../dtos/userDTO");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const PRIVATE_KEY = fs.readFileSync("./private.key");
const PUBLIC_KEY = fs.readFileSync("./public.key");

const login = async (body) => {
    const findUser = await User.findOne({
        where: { login: body.login }
    });

    if (!findUser || !bcrypt.compare(body.password)) {
        return { message: "Credenciais inválidas ou usuário não existe!!!", statusCode: 404 }
    }

    const token = jwt.sign(
        { id: findUser.id },
        PRIVATE_KEY,
        {
            expiresIn: "30min",
            algorithm: "RS256"
        }
    );

    return token;
}

const createUser = async (body) => {
    const data = {
        name: body.name,
        login: body.login,
        password: bcrypt.hashSync(body.password, 8),
    }

    const newUser = await User.create(data);

    const userDTO = createUserDTO({
        name: newUser.name,
    });

    return userDTO;
}

module.exports = {
    login,
    createUser,
}