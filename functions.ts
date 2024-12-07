function addTwo(num: number){
return num + 2
}

function toUpperCase(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){
    return signUpUser
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5)
toUpperCase("viral")
signUpUser("viral", "viral@gmail.com", true)
loginUser("h", "v@v.com")


function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

export{}
