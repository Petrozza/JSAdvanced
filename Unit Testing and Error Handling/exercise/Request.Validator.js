function solve(httpObj) {

    validateMethod(httpObj);
    validateUri(httpObj);
    validateVersion(httpObj);
    validateMessage(httpObj);

    return httpObj;


    function validateMessage(httpObj) {
        propName = 'message';
        let messageRegex = /^[^<>\\&'"]*$/;

        if (httpObj[propName] === undefined ||
            !messageRegex.test(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Message');
        }
        
    }

    function validateVersion(httpObj) {
        propName = 'version';
        let validVarsions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
       
        if (httpObj[propName] === undefined ||
            !validVarsions.includes(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function validateUri(httpObj) {
        let propName = 'uri';
        let uriRegex = /^\*$|^[a-zA-z0-9.]+$/

        if (httpObj[propName] === undefined ||
            !uriRegex.test(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function validateMethod(httpObj) {
        let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let propName = 'method';

        if (httpObj[propName] === undefined ||
            !validMethods.includes(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Method');
        }
    }

}

try {
    console.log(solve({
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
      }
      
      
      ));
} catch (error) {
    console.log(error.message);     
}