export class UserService {
    static checkForNull(object: Record<string, unknown>,): void {
        Object.entries(object).forEach(entry => {
            if (entry[1] === null) {
                throw new TypeError(`O atributo ${entry[0]} foi enviado como nulo`);
            }
        });
    }

    static checkForTyping(object: Record<string, unknown>): void {
        let hasError = false;
        Object.entries(object).forEach((entry: Array<unknown>) => {
            const value: unknown = entry[1];
            const key: string = entry[0] as string;
            let defaultError = `O tipo do atributo ${key} foi enviado como algo diferente de `;
            switch (key) {
                case "birthdate": {
                    if (typeof value !== "string") {
                        defaultError += `Date`;
                        hasError = true;
                    }
                    const parts: Array<number> = (value as string).split('-').map((value: string) => {
                        return parseInt(value);
                    });
                    const date: Date = new Date(parts[0], parts[1] - 1, parts[2]);

                    if (isNaN(date.getDate())) {
                        throw new Error('A data inserida é inválida');
                    }
                    break;
                }
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

    static checkIfEmailsMatch(email: string, confirmation: string): void {
        if (email.trim() !== confirmation.trim()) {
            throw new Error("Os emails inseridos tem de ser idênticos.")
        }
    }

    static checkIfCpfIsValid(cpf: string): void {
        const arrayCpfStrings = cpf.replace(/[.-]/g, "").split('');
        const arrayCpfNumbers = arrayCpfStrings.map(function (string) {
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
}