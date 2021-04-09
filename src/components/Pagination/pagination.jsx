import React, { Component } from "react";
import styles from "./pagination.module.css";
import Router from "next/router";
export class pagination extends Component {
  render() {
    return (
      <div className={styles.container}>
        {Router.router == null ? null : (
          <div className={styles.row}>
            <div onClick={()=>Router.push(`/${this.props.router}/${Router.router.query.pid}?pagina=${Number.parseInt(Router.router.query.pagina)-1}`)} className={Router.router.query.pagina>=!1?styles.Previous: styles.next}>{`< Previous`}</div>
            <div onClick={()=>Router.push(`/${this.props.router}/${Router.router.query.pid}?pagina=${Number.parseInt(Router.router.query.pagina)-2}`)} className={styles.item}>
              {Router.router.query.pagina > 2? Router.router.query.pagina-2: null}
            </div>
            <div onClick={()=>Router.push(`/${this.props.router}/${Router.router.query.pid}?pagina=${Number.parseInt(Router.router.query.pagina)-1}`)} className={styles.item}>
              {Router.router.query.pagina > 1? Router.router.query.pagina-1: null}
            </div>
            <div className={styles.itemSelect}>
              {Router.router.query.pagina}
            </div>
            <div onClick={()=>Router.push(`/${this.props.router}/${Router.router.query.pid}?pagina=${Number.parseInt(Router.router.query.pagina)+1}`)} className={styles.item}>
              {Router.router.query.pagina <= Number.parseInt(Router.router.query.pagina)+1? Number.parseInt(Router.router.query.pagina)+1: null}
            </div>
            <div onClick={()=>Router.push(`/${this.props.router}/${Router.router.query.pid}?pagina=${Number.parseInt(Router.router.query.pagina)+2}`)} className={styles.item}>
              {Router.router.query.pagina <= Number.parseInt(Router.router.query.pagina)+2? Number.parseInt(Router.router.query.pagina)+2: null}
            </div>
            <div onClick={()=>Router.push(`/${this.props.router}/${Router.router.query.pid}?pagina=${Number.parseInt(Router.router.query.pagina)+1}`)} className={Router.router.query.pagina <! 2?styles.Previous: styles.next}>{`Next >`}</div>
          </div>
        )}
      </div>
    );
  }
}

export default pagination;
