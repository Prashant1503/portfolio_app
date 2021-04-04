
function getData (url) {

    let postPromise =   new Promise((resolve,reject) => {

        fetch(url,{method : "GET"})
            .then((data) => {
                console.log("Data :" + data);
                resolve(data);
            })
            .catch((err) => {
                console.error("Err" + err);
                reject(err);

            })
    });

    return postPromise;
}

async function  read() {

    const promiseToken = await getData('https://jsonplaceholder.typicode.com/posts')

    .then((data) => {

        console.log("Data :" + data);

    })
    .catch(err => {
        console.error(err);
    });


    console.log("Token " + promiseToken);
}