var contacts = [
    {
        "firstName" : "Akira",
        "lastName" : "laine",
        "number" : "0543236543",
        "likes" : ["Pizza", "Coding", "Brownie Points"]
    },

    {
        "firstName" : "Harry",
        "lastName" : "Potter",
        "number" : "0994372684",
        "likes" : ["Hogwarts", "Magic", "Hagrid"]

    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }

    return "No such contact";
}

var data = lookUpProfile("Harry","likes");
console.log(data);