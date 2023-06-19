import { Footer } from '../../ui/footer/Footer';
import { Header } from '../../ui/header/Header';
import s from './Step2Page.module.scss';

export const Step2Page = () => {
  return (
    <div className={s.steppage__wrapper}>
      <div className={s.steppage__inner}>
        <Header option="Step2Page" />
        <div className={s.steppage__footer}>
          <Footer option="Step2Page" />
        </div>
      </div>
    </div>
  );
}
