import { TPassword } from './password.interfaces';

export const selectPassword = (state: { password: TPassword }): TPassword => state.password;
