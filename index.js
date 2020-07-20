function randomNumber(min,max){

    if (typeof(max) !== 'number' && typeof(min) !== 'number'){

        min = 0;
        max = 1;

    }

    return (Math.round(Math.random() * (max-min) + min))


}

module.exports = randomNumber;