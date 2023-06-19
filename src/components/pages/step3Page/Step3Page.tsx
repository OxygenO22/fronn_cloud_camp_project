import { Footer } from '../../ui/footer/Footer';
import { Header } from '../../ui/header/Header';
import s from './Step3Page.module.scss';

export const Step3Page = () => {
  return (
    <div className={s.steppage__wrapper}>
      <div className={s.steppage__inner}>
        <Header option="Step3Page" />
        <div className={s.steppage__footer}>
          <Footer option="Step3Page" />
        </div>
      </div>
    </div>
  );
}
