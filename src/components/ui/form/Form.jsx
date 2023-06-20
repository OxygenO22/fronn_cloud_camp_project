import { Input } from '../input/Input';
import s from './Form.module.scss'
import { useForm } from "react-hook-form";
import { selectOptions } from './FormData';

export const Form = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(data.Phone)
    /* dispatch(sendEmail(data.Email));
    dispatch(openPopup()); */
    reset();
  };

  return (
    <form className={s.input__form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.input__wrapper}>
        <div className={s.input__text_wrapper}>
          <p className={s.input__text}>Номер телефона</p>
        </div>
        <input
          className={s.input}
          type="tel"
          placeholder="+7 999 999-99-99"
          {...register("Phone", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
              message: "Введите верный формат номера телефона, например: +7 999 999-99-99",
            },
          })}
        />
        <div className={s.input__error_wrapper}>
          {errors.Phone && (
            <span className={s.input__error}>
              {errors.Phone.message}
            </span>
          )}
        </div>
      </label>
      <label className={s.input__wrapper}>
        <div className={s.input__text_wrapper}>
          <p className={s.input__text}>Email</p>
        </div>
        <input
          className={s.input}
          type="email"
          placeholder="tim.jennings@example.com"
          {...register("Email", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Введите email в правильном формате",
            },
          })}
        />
        <div className={s.input__error_wrapper}>
          {errors.Email && (
            <span className={s.input__error}>
              {errors.Email.message}
            </span>
          )}
        </div>
      </label>
      <label className={s.input__wrapper}>
        <div className={s.input__text_wrapper}>
          <p className={s.input__text}>Nickname</p>
        </div>
        <input
          className={s.input}
          type="text"
          placeholder="Placeholder"
          {...register("Nickname", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /^[A-zА-яЁё\d]+$/,
              message: "Можно вводить только буквы и цифры",
            },
            maxLength: {
              value: 30,
              message: 'Максимальная длина 30 символов'
            }
          })}
        />
        <div className={s.input__error_wrapper}>
          {errors.Nickname && (
            <span className={s.input__error}>
              {errors.Nickname.message}
            </span>
          )}
        </div>
      </label>
      <label className={s.input__wrapper}>
        <div className={s.input__text_wrapper}>
          <p className={s.input__text}>Name</p>
        </div>
        <input
          className={s.input}
          type="text"
          placeholder="Placeholder"
          {...register("Name", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /^[A-zА-яЁё]+$/,
              message: "Можно вводить только буквы",
            },
            maxLength: {
              value: 50,
              message: 'Максимальная длина 50 символов'
            }
          })}
        />
        <div className={s.input__error_wrapper}>
          {errors.Name && (
            <span className={s.input__error}>
              {errors.Name.message}
            </span>
          )}
        </div>
      </label>
      <label className={s.input__wrapper}>
        <div className={s.input__text_wrapper}>
          <p className={s.input__text}>Sername</p>
        </div>
        <input
          className={s.input}
          type="text"
          placeholder="Placeholder"
          {...register("Sername", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /^[A-zА-яЁё]+$/,
              message: "Можно вводить только буквы",
            },
            maxLength: {
              value: 50,
              message: 'Максимальная длина 50 символов'
            }
          })}
        />
        <div className={s.input__error_wrapper}>
          {errors.Sername && (
            <span className={s.input__error}>
              {errors.Sername.message}
            </span>
          )}
        </div>
      </label>
      <label className={s.input__wrapper}>
        <div className={s.input__text_wrapper}>
          <p className={s.input__text}>Sex</p>
        </div>
        <select
          className={s.input}
          type="text"
          placeholder="Placeholder"
          {...register("Sex", {
            required: "Необходимо выбрать пол",
          })}
          >
            { selectOptions.map(option => 
              <option value={option.value} key={option.id} >{option.text}</option>
              )
            }
          </select>
        <div className={s.input__error_wrapper}>
          {errors.Sex && (
            <span className={s.input__error}>
              {errors.Sex.message}
            </span>
          )}
        </div>
      </label>
      
        <button type="submit">Deliver</button>
    </form>
  );
}
