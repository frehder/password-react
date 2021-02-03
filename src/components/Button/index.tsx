import React from 'react';
import * as S from './styles';

export type TStyleType = 'default' | 'primary';

interface IButtonProps {
    label: string;
    onClick: (event) => void;
    type?: TStyleType;
    containerStyle?: React.CSSProperties;
}

const Button = ({ label, onClick, type = 'default', containerStyle = {} }: IButtonProps): React.ReactElement => {
    const handleClick = (event) => {
        event.preventDefault();
        onClick(event);
    };

    return (
        <S.Container style={containerStyle}>
            <S.Button styleType={type} onClick={handleClick}>
                {label}
            </S.Button>
        </S.Container>
    );
};

export default Button;
