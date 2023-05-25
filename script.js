async function getdata(){
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = (await result).json;
    console.log(data);
}

getdata();