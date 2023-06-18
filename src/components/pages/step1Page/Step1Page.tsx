import { JumpButton } from '../../ui/buttons/jumpButton/JumpButton';
import s from './Step1Page.module.scss';

export const Step1Page = () => {
  return (
    <div>
      Step1Page
      <JumpButton option='Back' />
      <JumpButton option='Next' />
    </div>
  )
}
