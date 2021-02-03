import React from 'react';
import * as S from './styles';

interface INumberInputProps {
    name: string;
    label: string;
    onChange: (event) => void;
    step: number;
    min: number;
    max: number;
    value: number | undefined;
    containerStyle?: React.CSSProperties;
}

const NumberInput = ({
    name,
    label,
    onChange,
    value = 0,
    step = 1,
    min = 0,
    max = 100,
    containerStyle = {},
}: INumberInputProps): React.ReactElement => {
    const [number, setNumber] = React.useState<number>(value);

    React.useEffect(() => setNumber(value), [value]);

    const handleOnChange = (event) => {
        const newNumber = parseInt(event.target.value);
        if (!!onChange) onChange(newNumber);
        setNumber(newNumber);
    };

    return (
        <S.Container style={containerStyle}>
            <S.Package>
                <S.Label htmlFor={name}>{label}</S.Label>
                <S.Input
                    type="number"
                    name={name}
                    id={name}
                    step={step}
                    min={min}
                    max={max}
                    value={number}
                    onInput={handleOnChange}
                />
            </S.Package>
        </S.Container>
    );
};

export default NumberInput;
