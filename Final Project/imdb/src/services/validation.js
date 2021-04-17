
const Validate = {

    FormIsEmpty: form => {
        if (!form) {
            return true
        }
        for (const property in form) {
            if (!form[property]) {
                return true
            }
        }
        return false

    },
    EmailIsValid: email => {
        const tester = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (tester.test(email)) {
            return false
        }
        return true
    },
    



}
export default Validate;