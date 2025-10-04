const AppError = require("../errors/error");

function errorHandler(err, request, response, next) {
    const statusCode = err.statusCode || 500;

    response.status(statusCode).json({
        success: false,
        message: err.message || "Erro interno no servidor"
    });
}

module.exports = errorHandler;