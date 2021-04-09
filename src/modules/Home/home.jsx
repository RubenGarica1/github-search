import React, { Component } from "react";
import styles from "./home.module.css";
export class home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.contentResults}>
            <img className={styles.image} src="https://avatars.githubusercontent.com/u/42419701?v=4" alt=""/>
            <h1 className={styles.title}>RubenGarcia1</h1>
            <h2 className={styles.subTitle}>RubenGarica1</h2>
            <a className={styles.link} href="https://drive.google.com/file/d/1ZbJ3uBSKtg47stg0J5lUQsYdB1OOxfgO/view?usp=sharing">Descargar CV</a>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
