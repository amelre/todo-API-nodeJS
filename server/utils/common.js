module.exports = {
    error: commonErrorResponse,
    success: commonSuccessResponse
};

 function commonErrorResponse(res, code, err) {
    return res.status(code).json({
        ok: false,
        err
    })
}

function commonSuccessResponse(res, data){
    return res.json({
        ok: true,
        data
    })
}
