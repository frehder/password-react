const defaultConfig = {
    length: 24,
    hasDividers: true,
};

export const lengthLimits = {
    min: 4,
    max: 100,
};

export type TLengthLimits = typeof lengthLimits;
export const defaultPassword = '';
export default defaultConfig;
