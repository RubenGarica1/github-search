import React, { Component } from "react";
import styles from "./options.module.css";
import { connect } from 'react-redux'
import {searchUsers} from '../../actions/users.action'
import {searchReposition} from '../../actions/reposition.action'
import Router from 'next/router'
export class options extends Component {
  handleSearh =async router => {

    const {searchUsers, searchReposition, clienteReducers} = this.props
    await searchReposition(Router.router.query.pid)
    await searchUsers(Router.router.query.pid)
    this.setState({ select: false });
    Router.push(`/${router}/${Router.router.query.pid}?pagina=1`);
  };
  render() {
    return (
      <>
      {this.props.movil?
        <div className={styles.contentOptionsMovil}>
        <div onClick={()=>this.handleSearh("reposition")} className={styles.boxAlign}>
          <div className={styles.boxMovil}>
            <div className={styles.box}>
            <div className={styles.categoria}>Repositories</div>
            <div className={styles.categoriaCount}>{this.props.repositoriesCount.toLocaleString('en')}</div>
            </div>

            {this.props.select == "Repositories" ? (
              <div className={styles.lineRepo}></div>
            ) : (
              <div className={styles.lineRepoNone}></div>
            )}
          </div>
        </div>
        <div className={styles.line}></div>
        <div onClick={()=>this.handleSearh("users")} className={styles.boxAlign}>
          <div className={styles.boxMovil}>
            <div className={styles.box}>
            <div className={styles.categoria}>Users</div>
            <div className={styles.categoriaCount}>{this.props.UsersCount.toLocaleString('en')}</div>
            </div>

            {this.props.select == "Users" ? (
              <div className={styles.lineRepo}></div>
            ) : (
              <div className={styles.lineRepoNone}></div>
            )}
          </div>
        </div>
      </div>
      :
      <div className={styles.contentOptions}>
        <div onClick={()=>this.handleSearh("reposition")} className={styles.boxAlign}>
          <div className={styles.box}>
            {this.props.select == "Repositories" ? (
              <div className={styles.lineHo}></div>
            ) : (
              <div></div>
            )}
            <div className={styles.categoria}>Repositories</div>
          </div>
          <div className={styles.categoriaCount}>{this.props.repositoriesCount.toLocaleString('en')}</div>
        </div>
        <div className={styles.line}></div>
        <div onClick={()=>this.handleSearh("users")} className={styles.boxAlign}>
          <div className={styles.box}>
            {this.props.select == "Users" ? (
              <div className={styles.lineHo}></div>
            ) : (
              <div></div>
            )}
            <div className={styles.categoria}>Users</div>
          </div>
          <div className={styles.categoriaCount}>{this.props.UsersCount.toLocaleString('en')}</div>
        </div>
      </div>}
      </>
    );
  }
}
const mapStateToProps = ({clienteReducers}) => ({
  clienteReducers
})

const mapDispatchToProps = {
  searchUsers,
  searchReposition
}
export default connect(mapStateToProps, mapDispatchToProps)(options);
