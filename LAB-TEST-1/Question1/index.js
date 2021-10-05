const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(arr) {
    return new Promise(function(res, rej) {
        let lowerCaseArray = []
        for (let x of arr) {
            if (typeof x === 'string') {
                lowerCaseArray.push(x.toLowerCase())
            }
        }
        if (lowerCaseArray.length != 0) {
            res(lowerCaseArray)
        } else {
            rej()
        }
    })
}



lowerCaseWords(mixedArray).then(
    function(value) { console.log(value) },
    function(error) { console.log("No String Found.") }
)