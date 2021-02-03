import defaultConfig, { lengthLimits, TLengthLimits } from '../default.config';
import { IConfig } from '../store/config/config.interfaces';
import { TPassword } from '../store/password/password.interfaces';

// TODO: future sample project: this could be an API.
export default class PasswordGenerator {
    config: IConfig;
    password: TPassword;
    dividerChar: string;
    setOfChars: string;
    lengthLimits: TLengthLimits;

    constructor(config?: IConfig) {
        this.config = config || defaultConfig;
        this.password = '';
        this.lengthLimits = lengthLimits;

        // TODO: make dividerChar and setOfChars configurable for the user in the future.
        // NOTE: missing chars to prevent confusion: l, o, O, 0
        this.setOfChars = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789';
        this.dividerChar = '-';
    }

    init = (): Promise<TPassword> =>
        new Promise((resolve) => {
            do {
                this.password = this._generate();
            } while (!this._isValid());

            resolve(this.password);
        });

    _isValid = (): boolean => {
        const password = this.password;
        const { length, hasDividers } = this.config;

        if (password.length < this.lengthLimits.min) {
            console.warn(`Password length too short: ${password.length} (Password: "${password}")`);
            return true;
        }

        if (!!length && password.length < length) {
            console.log(
                `Password not valid: Wrong length (${password.length}, expected >= ${length}) (Password: "${password}")`,
            );
            return false;
        }

        if (!new RegExp(/[0-9]/).test(password)) {
            console.log(`Password not valid: Missing numbers (Password: "${password}")`);
            return false;
        }

        if (!new RegExp(/[A-Z]/).test(password)) {
            console.log(`Password not valid: Missing uppercase chars (Password: "${password}")`);
            return false;
        }

        if (hasDividers && !new RegExp(/[-]/).test(password)) {
            console.log(`Password not valid: Missing dividers (Password: "${password}")`);
            return false;
        }

        if (hasDividers && password.substring(password.length - 1) === this.dividerChar) {
            console.log(`Password not valid: Divider at the end (Password: "${password}")`);
            return false;
        }

        return true;
    };

    _generate = (): TPassword => {
        const { length = 0, hasDividers } = this.config;
        const chars = this.setOfChars;
        let totalLength = 0;
        let password = '';

        while (totalLength < length) {
            let partLength = Math.floor(Math.random() * 3) + 2;

            for (let i = 1; i <= partLength; i++) {
                password = password + chars[Math.floor(Math.random() * chars.length)];
            }

            if (hasDividers) {
                password = password + this.dividerChar;
                partLength++;
            }

            totalLength = totalLength + partLength;
        }

        return password.substring(0, length);
    };
}
