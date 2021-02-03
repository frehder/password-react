import { IConfig } from '../store/config/config.interfaces';
import { TPassword } from '../store/password/password.interfaces';
import PasswordGenerator from './PasswordGenerator.class';

export const getNewPassword = async (config?: IConfig): Promise<TPassword> =>
    await new PasswordGenerator(config).init();
