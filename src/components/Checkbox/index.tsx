import React from 'react';
import { THasDividers } from '../../store/config/config.interfaces';
import * as S from './styles';

interface ICheckboxProps {
    label: string;
    name: string;
    onChange: (event) => void;
    isChecked: THasDividers;
    containerStyle?: React.CSSProperties;
}

const Checkbox = ({ label, name, onChange, isChecked, containerStyle = {} }: ICheckboxProps): React.ReactElement => {
    const [checkedStatus, setCheckedStatus] = React.useState(isChecked);

    React.useEffect(() => setCheckedStatus(isChecked), [isChecked]);

    const handleOnChange = (event) => {
        const newCheckedStatus = event.target.checked;
        if (!!onChange) onChange(newCheckedStatus);
        setCheckedStatus(newCheckedStatus);
    };

    return (
        <S.Container style={containerStyle}>
            <S.Label htmlFor={name}>
                <S.Input
                    type="checkbox"
                    name={name}
                    id={name}
                    value={1}
                    checked={checkedStatus}
                    onChange={handleOnChange}
                />
                {label}
            </S.Label>
        </S.Container>
    );
};

export default Checkbox;
