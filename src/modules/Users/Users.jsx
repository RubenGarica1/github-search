import React, { Component } from "react";
import styles from "./Users.module.css";
import Options from "../../components/Options";
import ListUsers from "../../components/ListUsers";
import { connect } from "react-redux";
import { addusers } from "../../actions/users.action";
export class reposition extends Component {
  componentDidMount() {
    const { addusers } = this.props;
    addusers(this.props.Users.items);
  }
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.webOption}>
              <Options
                select="Users"
                repositoriesCount={this.props.repositoriesCount}
                UsersCount={this.props.Users.total_count}
              />
            </div>
            <div className={styles.movilOption}>
              <Options
                movil={true}
                select="Users"
                repositoriesCount={this.props.repositoriesCount}
                UsersCount={this.props.Users.total_count}
              />
            </div>

            <div className={styles.contentResults}>
              <div className={styles.title}>
                {this.props.Users.total_count.toLocaleString("en")} users
              </div>
              <ListUsers
                repositoriesCount={this.props.repositoriesCount}
                Users={this.props.Users}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ clienteReducers }) => ({
  clienteReducers
});

const mapDispatchToProps = {
  addusers
};
export default connect(mapStateToProps, mapDispatchToProps)(reposition);
