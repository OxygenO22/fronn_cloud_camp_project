import { FC } from 'react';
import { JumpButton } from '../buttons/jumpButton/JumpButton';
import s from './Footer.module.scss';

interface IFooter {
  option: 'StartPage' | 'Step1Page' | 'Step2Page' | 'Step3Page';
};

export const Footer: FC<IFooter> = ({option}) => {
  return (
    <footer className={s.footer__wrapper}>
      <div className={s.footer__inner}>
        {
          option === "StartPage" 
          ? 
          <JumpButton option="Start" /> 
          :
          option === "Step1Page" || option === "Step2Page" 
          ? 
          <div className={s.footer__jumpbutton_wrapper}>
            <JumpButton option="Back" />
            <JumpButton option="Next" />
          </div> 
          :
          option === "Step3Page" && <JumpButton option="Back" />
        }
      </div>
    </footer>
  );
}
