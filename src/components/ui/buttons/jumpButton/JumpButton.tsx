import { FC } from 'react';
import s from './JumpButton.module.scss';
import { JumpButtonData } from './JumpButtonData';
import { useNavigate } from 'react-router-dom';

interface IJumpButton {
  option: 'Start' | 'Next' | 'Back';
}

export const JumpButton: FC<IJumpButton> = ({option}) => {
  const navigate = useNavigate();

  
  const jump = () => option === 'Start' || option === 'Next' ? navigate(1) : navigate(-1);


  return (
    <>
      {JumpButtonData.map(
        (data) =>
          option === data.option && (
            <div
              className={
                option === "Start" || option === "Next"
                  ? s.jumpbutton__wrapper
                  : s.jumpbutton__wrapper_back
              }
              key={data.id}
              onClick={jump}
            >
              <p
                className={
                  option === "Start" || option === "Next"
                    ? s.jumpbutton__text
                    : s.jumpbutton__text_back
                }
              >
                {data.name}
              </p>
            </div>
          )
      )}
    </>
  );
}
