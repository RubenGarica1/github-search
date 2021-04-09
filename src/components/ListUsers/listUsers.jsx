import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "./listUsers.module.css";
import { connect } from 'react-redux'
import {reloadusers, searchUsers} from '../../actions/users.action'
import Pagination from '../Pagination'
function listUsers(props) {
  const [load, setLoad] = React.useState(true);

  useEffect( async() => {
    setLoad(true);
    const {reloadusers} = props
    await reloadusers(props.Users.items)
  }, []);
  setTimeout(() => {
    setLoad(false);
  }, 1000);
  return (
    <div>
      <div>
        {props.clienteReducers.users==undefined
          ? null
          : props.clienteReducers.users.map((item, i) => (
              <div className={styles.col} key={i}>
                <div className={styles.line}></div>
                <div key={item.id} className={styles.container}>
                  <img src={item.avatar_url} className={styles.image} />
                  <Link href={item.html_url}>
                    <h5 className={styles.name}>{item.name}</h5>
                  </Link>
                  <Link href={item.html_url}>
                    <h5 className={styles.login}>{item.login}</h5>
                  </Link>
                </div>
                <div className={styles.bio}>{item.bio}</div>
                <div className={styles.row}>
                  <div className={styles.info}>{item.location}, </div>
                  <div className={styles.info}>{item.email}</div>
                </div>
              </div>
            ))}
      </div>
      <Pagination router="users"/>
    </div>
  );
}
const mapStateToProps = ({clienteReducers}) => ({
  clienteReducers
})

const mapDispatchToProps = {
  reloadusers,
  searchUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(listUsers);
