import React, { Component } from 'react'
import styles from './reposition.module.css'
import Options from '../../components/Options'
import ListReposition from '../../components/ListReposition'

export class reposition extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.webOption}>
            <Options select="Repositories" repositoriesCount={this.props.repositoriesCount.total_count} UsersCount={this.props.Users.total_count}/>
          </div>
          <div className={styles.movilOption}>
            <Options movil={true} select="Repositories" repositoriesCount={this.props.repositoriesCount.total_count} UsersCount={this.props.Users.total_count}/>
          </div>

          <div className={styles.contentResults}>
            <div className={styles.title}>Showing {this.props.repositoriesCount.total_count.toLocaleString('en')} available repository results</div>
            <ListReposition Users={this.props.repositoriesCount}/>
          </div>
        </div>
      </div>
    )
  }
}

export default reposition
