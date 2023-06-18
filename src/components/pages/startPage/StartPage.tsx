import s from './StartPage.module.scss';
import avatar from '../../../pictures/Avatar.svg';
import { SocialMediaLink } from '../../ui/buttons/socialMedia/SocialMediaLink';
import { JumpButton } from '../../ui/buttons/jumpButton/JumpButton';

export const StartPage = () => {
  return (
    <div className={s.startpage__wrapper}>
      <div className={s.startpage__inner}>
        <div className={s.startpage__header}>
          <div className={s.startpage__avatar}>
            <img className={s.startpage__avatar_img} src={avatar} alt="avatar" />
          </div>
          <div className={s.startpage__personal_info}>
            <div className={s.startpage__name_wrapper}>
              <p className={s.startpage__name_text}>Иван Иванов</p>
            </div>
            <div className={s.startpage__socialmedia}>
              <SocialMediaLink />
            </div>
            <JumpButton option='Start' />
          </div>
        </div>
      </div>
    </div>
  );
}
