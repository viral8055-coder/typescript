let score: number | string  = 33
score = 44
score = "abcd"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let viral: User | Admin = {name: "viral", id: 332}

viral = {username: "vm", id: 443}

getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    if (typeof id === "string"){
        id.toLowerCase()
    }
}

//array

const data1: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (number | string | boolean)[] = [1, "2", true, 3]