let resolvedPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' }
        resolve(success)
    }, 500);
})

let rejectedPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        try {
            throw new Error('delayed exception!')
        } catch (e) {
            let exception = { 'error': e.message }
            reject(exception)
        }

    }, 500);
})

resolvedPromise.then(
    result => console.log(result),
    error => console.log(error))
rejectedPromise.then(
        result => console.log(result),
        error => console.log(error))
    .catch(
        result => console.log(result),
        error => console.log(error)
    )