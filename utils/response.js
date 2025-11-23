const sendSuccess = (res, message, data = null) => {
    res.status(200).json({
        success: true,
        message,
        data,
    });
};

const sendError = (res, message, statusCode = 400) => {
    res.status(statusCode).json({
        success: false,
        message,
    });
};

module.exports = {
    sendSuccess,
    sendError
};
