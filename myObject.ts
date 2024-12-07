// const User = {
//     name: "Viral",
//     email: "v@v.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){
    
// }


// // let newUser({name: "Viral", isPaid: false, email: "v@v.com",});

// createUser({name: "Viral", isPaid: false});

// function createCourse():{name: string, price: number}{
//     return {name: "Reactjs", price: 400}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User){}

// createUser({name: "", email: "", isActive: true}) 

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number  // that question mark shows that variable is optonal which is used to be use not necessary
}

let myUser: User = {
    _id: "12345",
    name: "V",
    email: "v@v.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardD
etails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "v@gmail.com"
// myUser._id = "asa"

export{}