import React from 'react';
import * as S from './styles';

type THtmlSectionHeadingElementLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface IHeadlineProps {
    level?: THtmlSectionHeadingElementLevel;
    children?: React.ReactNode;
}

const Headline = ({ level = 1, children }: IHeadlineProps): React.ReactElement => {
    const headline = React.createElement(`h${level}`, {}, children);

    return <S.Container>{headline}</S.Container>;
};

export default Headline;
