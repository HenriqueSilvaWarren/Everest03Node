class UserService {
    checkForNull(object, res) {
        Object.entries(object).forEach(entry => {
            if (entry[1] === null) {
                throw new TypeError(`O atributo ${entry[0]} foi enviado como nulo`);
            }
        });
    }

    checkForTyping(object) {
        let hasError = false;
        Object.entries(object).forEach(entry => {
            const value = entry[1];
            let defaultError = `O tipo do atributo ${entry[0]} foi enviado como algo diferente de `;
            switch (entry[0]) {
                case "birthdate":
                    if (typeof value !== "string") {
                        defaultError += `Date`;
                        hasError = true;
                    }
                    let date = new Date(value);
                    if (isNaN(date)) {
                        throw new Error('A data inserida é inválida');
                    }
                    break;
                case "email_sms":
                case "whatsapp":
                    if (typeof value !== "boolean") {
                        defaultError += `booleano`;
                        hasError = true;
                    }
                    break;
                case "number":
                    if (typeof value !== "number") {
                        defaultError += `número`;
                        hasError = true;
                    }
                    break;
                default:
                    if ((typeof (value)) !== "string") {
                        defaultError += `string`;
                        hasError = true;
                    }
                    break;
            }
            if (hasError) {
                throw new TypeError(defaultError);
            }
        }
        );
    }

    checkIfEmailsMatch(email, confirmation) {
        if (email.trim() !== confirmation.trim()) {
            throw new Error("Os emails inseridos tem de ser idênticos.")
        }
    }

    checkIfCpfIsValid(cpf) {
        let arrayCpfStrings = cpf.replaceAll(/[.-]/g, "").split('');
        let arrayCpfNumbers = arrayCpfStrings.map(function (string) {
            return parseInt(string, 10);
        });
        
        let firstVerificationNumber = 0;
        firstVerificationNumber = arrayCpfNumbers.reduce((previous, current, index) => {
            if (index < 9) {
                return previous + (current * (10 - index));
            }
            return previous;
        }, 0);

        console.log(firstVerificationNumber);
        firstVerificationNumber = (firstVerificationNumber * 10) % 11;
        firstVerificationNumber = firstVerificationNumber == 10 ? 0 : firstVerificationNumber;

        if (firstVerificationNumber != arrayCpfNumbers[9]) {
            throw new Error("CPF não é válido.");
        }

        let secondVerificationNumber = 0;
        secondVerificationNumber = arrayCpfNumbers.reduce((previous, current, index) => {
            if (index < 10) {
                return previous + (current * (11 - index));
            }
            return previous;
        }, 0);
        secondVerificationNumber = (secondVerificationNumber * 10) % 11;
        secondVerificationNumber = secondVerificationNumber == 10 ? 0 : secondVerificationNumber;

        if (secondVerificationNumber != arrayCpfNumbers[10]) {
            throw new Error("CPF não é válido.");
        }
    }
}

module.exports = new UserService;;