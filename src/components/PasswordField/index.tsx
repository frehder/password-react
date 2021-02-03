import React from 'react';
import { TPassword } from '../../store/password/password.interfaces';
import * as S from './styles';

interface IPasswordFieldProps {
    password: TPassword;
}

const PasswordField = ({ password }: IPasswordFieldProps): React.ReactElement => {
    const handleFocus = (event) => event.target.setSelectionRange(0, event.target.value.length);
    return (
        <S.Field
            type="text"
            name="password"
            className="form-password-field"
            defaultValue={password}
            onFocus={handleFocus}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
        />
    );
};

export default PasswordField;
