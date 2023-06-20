import { FC } from 'react';
import s from './Input.module.scss';

interface IInput {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  errors: any;
  inputName: string;
  required: string;
  patternValue: RegExp;
  patternMessage: string;
}

export const Input: FC<IInput> = ({
  label,
  type,
  placeholder,
  register,
  inputName, 
  required,
  patternValue,
  patternMessage,
  errors,
}) => {
  return (
    <label className={s.input__wrapper}>
      <div className={s.input__text_wrapper}>
        <p className={s.input__text}>{label}</p>
      </div>
      <input
        className={s.input}
        type={type}
        placeholder={placeholder}
        {...register(
          { inputName },
          {
            required: { required },
            pattern: {
              value: { patternValue },
              message: { patternMessage },
            },
          }
        )}
      />
      <div className={s.input__error_wrapper}>
        {errors && (
          <span className={s.input__error}>{errors.message}</span>
        )}
      </div>
    </label>
  );
};
