const generateArray = function(amount) {
    let returnArray = [];

    /*
        let amountConverted = parseInt(amount);
        amount = amountConverted;
    */

    amount = parseInt(amount);
    // console.log(amount);

    if (!Number.isNaN(amount)) {
        // console.log("Az amount egy szám.");
        for (let i = 0; i < amount; i++) {
            let diff = amount.toString().length - i.toString().length;
            let addChar = "";
            for (let j = 0; j < diff; j++) {
                addChar = addChar + "0";
            }
            returnArray.push(addChar + `${i}`);


        }
    } else {
        // console.log("Az amount nem egy szám.");
        returnArray.push("error");
    }

    return returnArray;
}

const loadEvent = function() {
    console.log("Az oldal betöltődött.");

    // console.log(generateArray("100"));
    // console.log(generateArray(15));
    // console.log(generateArray("kiskutya"));
    // console.log(generateArray([2]));

    const root = document.getElementById("root");
    const list = generateArray(100);

    //házi: ugyanannyi karakterből álljanak a tömb elemei, mint ahányat kérünk, hogy generáljunk

    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
        }
    }
}

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function() {
    ez is teljesen elfogadott
})

window.addEventListener("load", () => {
    arrow function, ez is teljesen elfogadott
})
*/