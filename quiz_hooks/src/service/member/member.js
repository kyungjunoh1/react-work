
let data_set = [
    {id:"aaa", pwd : "aaa", name : "홍길동", addr : "산골짜기"},
    {id:"bbb", pwd : "bbb", name : "김개똥", addr : "개똥별"},
    {id:"ccc", pwd : "ccc", name : "고길똥", addr : "마포구"}
]

const getData = () => {
    return data_set;
}

const memberDelete = (id) => {
    data_set = data_set.filter(m => m.id !== id);
}

const getOne = (id) => {
    return data_set.filter(m => m.id === id) [0];
}

export {getData, memberDelete, getOne};