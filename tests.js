var nig = require("./index.js")

if (nig.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+nig.name)
}



if (nig.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+nig.height)
}
