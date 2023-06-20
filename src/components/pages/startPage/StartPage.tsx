import s from './StartPage.module.scss';
import { Header } from '../../ui/header/Header';
import { Footer } from '../../ui/footer/Footer';
import { Form } from '../../ui/form/Form';

export const StartPage = () => {
  return (
    <div className={s.startpage__wrapper}>
      <div className={s.startpage__inner}>
        <Header option="StartPage" />
        <Form />
        <Footer option="StartPage" />
      </div>
    </div>
  );
}
