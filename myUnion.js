var score = 33;
score = 44;
score = "abcd";
var viral = { name: "viral", id: 332 };
viral = { username: "vm", id: 443 };
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, "2", true, 3];
