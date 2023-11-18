import React from "react";
import styles from './Table.module.css'


export const Contacts = () => {
  return (
    <div className={styles.para1}>
      <h1> Номер телефона : +79996047545 </h1>
      <h1> Адрес электронной почты : don.abdulla@yandex.ru</h1>
      <h1>
        Место проживания : Московская область, Солнечногорский район ,
        дп.Поварово, 1 Микрорайон, д.28, кв 140
      </h1>
    </div>
  );
};
