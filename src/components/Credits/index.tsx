import React from 'react';
import * as S from './styles';

interface ICreditsProps {
    children?: React.ReactNode;
    containerStyle?: React.CSSProperties;
}

const Credits = ({ children, containerStyle = {} }: ICreditsProps): React.ReactElement => {
    const name = React.createElement(`a`, { href: 'https://florianrehder.de/', target: '_blank' }, 'Florian Rehder');
    const year = new Date().getFullYear();
    const imprint = React.createElement(
        `a`,
        { href: 'https://florianrehder.de/impressum', target: '_blank' },
        'Imprint',
    );
    const child = !!children ? (
        children
    ) : (
        <S.Text>
            &copy; {year} {name} &ndash; {imprint}
        </S.Text>
    );

    return <S.Container style={containerStyle}>{child}</S.Container>;
};

export default Credits;
