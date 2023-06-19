import { Footer } from '../../ui/footer/Footer';
import { Header } from '../../ui/header/Header';
import s from './Step1Page.module.scss';

export const Step1Page = () => {
  return (
    <div className={s.steppage__wrapper}>
      <div className={s.steppage__inner}>
        <Header option='Step1Page' />
        <div className={s.steppage__footer}>
          <Footer option="Step1Page" />
        </div>
      </div>
    </div>
  );
}
