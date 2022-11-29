import { IBaseModel } from "../interfaces/IBaseModel";

export default class UserModel extends IBaseModel {
    full_name: string;
    email: string;
    email_confirmation: string;
    cpf: string;
    cellphone: string;
    birthdate: Date;
    email_sms: boolean;
    whatsapp: boolean;
    country: string;
    city: string;
    postal_code: string;
    address: string;
    number: number;

    constructor(
        data: Record<string, unknown>
    ) {
        super();
        this.full_name = data.full_name as string;
        this.email = data.email as string;
        this.email_confirmation = data.email_confirmation as string;
        this.cpf = data.cpf as string;
        this.cellphone = data.cellphone as string;
        this.birthdate = data.birthdate as Date;
        this.email_sms = data.email_sms as boolean;
        this.whatsapp = data.whatsapp as boolean;
        this.country = data.country as string;
        this.city = data.city as string;
        this.postal_code = data.postal_code as string;
        this.address = data.address as string;
        this.number = data.number as number;

    }
}