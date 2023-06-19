import s from './StartPage.module.scss';
import { Header } from '../../ui/header/Header';
import { Footer } from '../../ui/footer/Footer';

export const StartPage = () => {
  return (
    <div className={s.startpage__wrapper}>
      <div className={s.startpage__inner}>
        <Header option="StartPage" />
        <Footer option="StartPage" />
      </div>
    </div>
  );
}
