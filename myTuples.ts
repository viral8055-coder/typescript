let num: (string | number | boolean)[] = ["abc", 112, true];

type pUser = [number, string]

let oldUser: pUser = [112, "v@v.com"]

oldUser[1] = "c@c.com"
// oldUser.push(true);