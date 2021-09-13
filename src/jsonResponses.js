const randomNumberJSON = (max=1) => {
    max = Number(max);
    max = !max ? 1 : max;
    max = max < 1 ? 1 : max;
    const number = Math.random() * max;
    const obj = {
        timestamp: new Date(),
        number: number
    }
    return JSON.stringify(obj);
};

const getRandomNumberResponse = (request, response, params) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(randomNumberJSON(params.max));
    response.end();
};

module.exports.getRandomNumberResponse = getRandomNumberResponse;