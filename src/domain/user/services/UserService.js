class UserService {
    checkForNull(object, res) {
        var values = Object.entries(object);
        var i;
        for (i = 0; i < values.length; i++) {
            if (values[i][1] === null) {
                res.status(400).send(`O atributo ${values[i][0]} foi enviado como nulo`);
                throw new TypeError("Pelo menos um atributo foi enviado como nulo");
            }
        };
    }

    checkForTyping(object, res) {
        let values = Object.entries(object);
        let i;
        let hasError = false;
        for (i = 0; i < values.length; i++) {
            let defaultError = `O tipo do atributo ${values[i][0]} foi enviado como algo diferente de `;
            switch (values[i][0]) {
                case "birthdate":
                    if (!(values[i][1] instanceof Date)) {
                        res.status(400).send(defaultError + `Date`);
                        hasError = true;
                    }
                    break;
                case "email_sms":
                case "whatsapp":
                    if (typeof values[i][1] !== "boolean") {
                        res.status(400).send(defaultError + `booleano`);
                        hasError = true;
                    }
                    break;
                case "number":
                    if (typeof values[i][1] !== "number") {
                        res.status(400).send(defaultError + `número`);
                        hasError = true;
                    }
                    break;
                default:
                    if ((typeof (values[i][1])) !== "string") {
                        res.status(400).send(defaultError + `string`);
                        hasError = true;
                    }
                    break;
            }
            if (hasError) {
                throw new TypeError("Pelo menos um dado foi enviado incorretamente.");
            }
        }
    }

    checkIfEmailsMatch(email, confirmation, res) {
        if (email.trim() !== confirmation.trim()) {
            res.status(500).send("Os emails inseridos tem de ser idênticos.");
            throw new Error("Os emails inseridos tem de ser idênticos.")
        }
    }

    checkIfCpfIsValid(cpf, res) {
        var arrayCpfStrings = cpf.replaceAll(/[.-]/g, "").split('');
        var arrayCpfNumbers = arrayCpfStrings.map(function (string) {
            return parseInt(string, 10);
        });
        var i;
        var firstVerificationNumber = 0;
        for (i = 10; i > 1; i--) {
            firstVerificationNumber += arrayCpfNumbers[10 - i] * i;
        }
        firstVerificationNumber = (firstVerificationNumber * 10) % 11;
        firstVerificationNumber = firstVerificationNumber == 10 ? 0 : firstVerificationNumber;

        if (firstVerificationNumber != arrayCpfNumbers[9]) {
            res.status(500).send("CPF não é válido.");
            throw new Error("CPF não é válido.");
        }

        var secondVerificationNumber = 0;
        for (i = 11; i > 1; i--) {
            secondVerificationNumber += arrayCpfNumbers[11 - i] * i;
        }
        secondVerificationNumber = (secondVerificationNumber * 10) % 11;
        secondVerificationNumber = secondVerificationNumber == 10 ? 0 : secondVerificationNumber;

        if (secondVerificationNumber != arrayCpfNumbers[10]) {
            res.send("CPF não é válido.");
            throw new Error("CPF não é válido.");
        }
    }
}

module.exports = new UserService;;