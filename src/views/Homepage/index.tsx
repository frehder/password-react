import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Credits from '../../components/Credits';
import Headline from '../../components/Headline';
import NumberInput from '../../components/NumberInput';
import PasswordField from '../../components/PasswordField';
import { lengthLimits } from '../../default.config';
import { THasDividers } from '../../store/config/config.interfaces';
import { selectConfig, selectHasDividers, selectLength } from '../../store/config/config.selectors';
import { resetConfig, setHasDividers, setLength } from '../../store/config/config.slice';
import { selectPassword } from '../../store/password/password.selectors';
import { setPassword } from '../../store/password/password.slice';
import { getNewPassword } from '../../utils/password.utils';
import * as S from './styles';

interface IHomepageProps {
    title?: string;
}

const Homepage = ({ title }: IHomepageProps): React.ReactElement => {
    const dispatch = useDispatch();
    const password = useSelector(selectPassword);
    const config = useSelector(selectConfig);
    const length = useSelector(selectLength);
    const hasDividers = useSelector(selectHasDividers);

    const handleInputLength = (length) => {
        dispatch(setLength(length));
    };

    const handleInputHasDividers = (isChecked: THasDividers) => {
        dispatch(setHasDividers(isChecked));
    };

    const handleRegenerate = async () => {
        const newPassword = await getNewPassword(config);
        dispatch(setPassword(newPassword));
    };

    const handleReset = () => {
        dispatch(resetConfig());
    };

    return (
        <S.Container>
            <S.Header>
                <Headline>{title}</Headline>
            </S.Header>
            <S.Section>
                <S.Options>
                    <NumberInput
                        name="length"
                        label="Length"
                        step={1}
                        min={lengthLimits.min}
                        max={lengthLimits.max}
                        value={length}
                        onChange={handleInputLength}
                        containerStyle={{ flex: 1 }}
                    />
                    <Checkbox
                        label="Divide blocks by hyphen"
                        name="divider"
                        isChecked={hasDividers}
                        onChange={handleInputHasDividers}
                        containerStyle={{ flex: 3 }}
                    />
                </S.Options>
                <S.Content>
                    <PasswordField password={password} />
                </S.Content>
                <S.Actions>
                    <Button label="New Password" onClick={handleRegenerate} type="primary" />
                    <Button label="Reset Settings" onClick={handleReset} />
                </S.Actions>
            </S.Section>
            <S.Footer>
                <Credits />
            </S.Footer>
        </S.Container>
    );
};

export default Homepage;
