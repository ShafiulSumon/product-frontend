const FetchData = async (url) => {
    const data = await fetch(url) 
                    .then(response => {
                        if(response.ok){
                            return response.json();
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
    
    return data;
}

const PostData = async (url, data) => {    
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .catch(err => {
        console.log(err);
    })
    const result = await res.json();
    return result;
}

export {
    FetchData,
    PostData
}