export class UserService {
    static checkForNull(object: Object,): void {
        Object.entries(object).forEach(entry => {
            if (entry[1] === null) {
                throw new TypeError(`O atributo ${entry[0]} foi enviado como nulo`);
            }
        });
    }

    static checkForTyping(object: Object): void {
        let hasError: boolean = false;
        Object.entries(object).forEach((entry: any) => {
            const value: any = entry[1];
            const key: string = entry[0];
            let defaultError : string = `O tipo do atributo ${key} foi enviado como algo diferente de `;
            switch (key) {
                case "birthdate":
                    if (typeof value !== "string") {
                        defaultError += `Date`;
                        hasError = true;
                    }
                    let parts: Array<number> = value.split('-');
                    let date: Date = new Date(parts[0], parts[1] - 1, parts[2]);

                    if (isNaN(date.getDate())) {
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

    static checkIfEmailsMatch(email: String, confirmation: String): void {
        if (email.trim() !== confirmation.trim()) {
            throw new Error("Os emails inseridos tem de ser idênticos.")
        }
    }

    static checkIfCpfIsValid(cpf: String): void {
        let arrayCpfStrings = cpf.replace(/[.-]/g, "").split('');
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
};