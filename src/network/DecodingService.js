const decode_getAllProducts = (data) => {
    let temp = [];
    data.forEach(element => {
        const {
            name,
            desc,
            price
        } = element;
        temp.push({
            name,
            desc,
            price
        });
    });

    // console.log("temp: ",temp);
    return temp;
}

export {
    decode_getAllProducts
}