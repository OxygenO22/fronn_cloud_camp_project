import { Link } from "react-router-dom";
import { SocialMediaLinkData } from "./SocialMediaLinkData";
import s from './SocialMediaLink.module.scss';

export const SocialMediaLink = () => {
  return (
    <>
      {SocialMediaLinkData.map((data) => (
        <div className={s.socialmedia__wrapper} key={data.id}>
          <Link className={s.socialmedia__link} to={data.link} target="_blank">
            <div className={s.socialmedia__inner}>
              <div className={s.socialmedia__img_wrapper}>
                <img
                  className={s.socialmedia__img}
                  src={data.img}
                  alt={data.name}
                />
              </div>
              <div className={s.socialmedia__text_wrapper}>
                <p className={s.socialmedia__text}>{data.name}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
