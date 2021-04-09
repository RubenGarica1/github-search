import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "./listReposition.module.css";
import { connect } from 'react-redux'
import Image from 'next/image'
import moment from 'moment'
import {reloadReposition, searchReposition} from '../../actions/reposition.action'
import Pagination from '../Pagination'
function listResults(props) {
  const [load, setLoad] = React.useState(true);

  useEffect( async() => {
    setLoad(true);
    const {reloadReposition} = props
    await reloadReposition(props.Users.items)
  }, []);
  setTimeout(() => {
    setLoad(false);
  }, 1000);
  return (
    <div>
      <div>
        {props.repositionReducers.repositions==undefined
          ? null
          : props.repositionReducers.repositions.map((item, i) => (
              <div className={styles.col} key={i}>
                <div className={styles.line}></div>
                <div key={item.id} className={styles.container}>
                  <Image
                    src="/book (1).svg"
                    width="15"
                    height="15"
                    layout="fixed"
                    alt="flecha subir"
                    quality={1}
                  />
                  <Link href={item.html_url}>
                    <h5 className={styles.name}>{item.owner.login}/</h5>
                  </Link>
                  <Link href={item.html_url}>
                    <h5 className={styles.login}>{item.name}</h5>
                  </Link>
                </div>
                <div className={styles.bio}>{item.description}</div>
                <div className={styles.container}>
                  <div>
                    <Image
                      src="/estrella.svg"
                      width="12"
                      height="12"
                      layout="fixed"
                      alt="flecha subir"
                      quality={1}
                    />
                  </div>
                  {/* {console.log(item.stargazers_count.toString().length > 3? item.stargazers_count.toString().substr(0,1)+'k': 's')} */}
                  <div className={styles.info}>{item.stargazers_count.toString().length > 3? item.stargazers_count.toString().substr(0,1)+'k': item.stargazers_count}</div>
                  <div className={styles.info}>{item.language}</div>
                  <div className={styles.info}>{item.license!=null?item.license.name:null}</div>
                  <div className={styles.info}>{moment(item.pushed_at).startOf('day').fromNow()}</div>
                  <div className={styles.info}>{item.open_issues_count} issues need help</div>
                </div>
              </div>
            ))}
      </div>
        <Pagination router="reposition"/>
    </div>
  );
}
const mapStateToProps = ({repositionReducers}) => ({
  repositionReducers
})

const mapDispatchToProps = {
  reloadReposition,
  searchReposition
}
export default connect(mapStateToProps, mapDispatchToProps)(listResults);
