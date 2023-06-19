import avatar from '../../../pictures/Avatar.svg';
import { FC } from 'react';
import s from './Header.module.scss';
import { SocialMediaLink } from '../buttons/socialMedia/SocialMediaLink';
import { HeaderData } from './HeaderData';

interface IHeader {
  option: 'StartPage' | 'Step1Page' | 'Step2Page' | 'Step3Page';
}

export const Header: FC<IHeader> = ({ option }) => {
  return (
    <>
      {option === "StartPage" ? (
        <header className={s.header__wrapper}>
          <div className={s.header__inner}>
            <div className={s.header__avatar}>
              <img className={s.header__avatar_img} src={avatar} alt="avatar" />
            </div>
            <div className={s.header__personal_info}>
              <div className={s.header__name_wrapper}>
                <p className={s.startpage__name_text}>Иван Иванов</p>
              </div>
              <div className={s.header__socialmedia}>
                <SocialMediaLink />
              </div>
            </div>
          </div>
        </header>
      ) : (
        HeaderData.map(
          (data) =>
            option === data.option && (
              <header className={s.header__step} key={data.id}>
                <img src={data.src} alt={data.alt} />
              </header>
            )
        )
      )}
    </>
  );
}
