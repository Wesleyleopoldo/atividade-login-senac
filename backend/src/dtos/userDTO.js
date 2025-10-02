function createUserDTO(data = {}) {
    const {
        id,
        name,
        login,
        password,
    } = data;

    const dto = {}

    if(id !== undefined) dto.id = id;
    if(name !== undefined) dto.name = name;
    if(login !== undefined) dto.login = login;
    if(password !== undefined) dto.password = password;

    return dto;
}

module.exports = createUserDTO;