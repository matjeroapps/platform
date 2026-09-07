import React from 'react';
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: React.ReactNode;
}
export declare const Radio: any;
export interface RadioGroupProps {
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    children: React.ReactNode;
    direction?: 'row' | 'column';
    label?: string;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
