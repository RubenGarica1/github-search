import React, { Component } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import { connect } from "react-redux";
import { searchUsers } from "../../actions/users.action";
import { searchReposition } from "../../actions/reposition.action";
export class navbar extends Component {
  state = {
    select: false,
    wordSearh: "",
    dia: true
  };
  handleSearh = async router => {
    const { searchUsers, searchReposition } = this.props;
    await searchReposition(this.state.wordSearh);
    await searchUsers(this.state.wordSearh);
    this.setState({ select: false });
    Router.push(`/${router}/${this.state.wordSearh}?pagina=1`);
  };
  dayModde = () => {
    const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    this.setState({dia:!this.state.dia})
    if (prefresDarkScheme.matches) {
      document.body.classList.toggle('light-theme')
  } else {
      document.body.classList.toggle('dark-theme')
  }
  }
  render() {
    return (
      <div
        onSelect={() => this.setState({ select: true })}
        className={styles.container}
      >
        <div className={styles.col}>
          <div onClick={() => Router.push("/")} className={styles.icon}>
            <Image
              src="/github.svg"
              width="32"
              height="32"
              layout="fixed"
              alt="github"
              quality={40}
            />
          </div>
          {this.state.wordSearh != "" && this.state.select ? (
            <div
              onClick={() => this.setState({ select: false })}
              className={styles.bg}
            ></div>
          ) : null}
          <div
            className={
              this.state.select
                ? styles.inputContentSelect
                : styles.inputContent
            }
          >
            <input
              className={this.state.select ? styles.inputSelect : styles.input}
              type="text"
              onChange={e => this.setState({ wordSearh: e.target.value })}
              placeholder="Search or jump to..."
            />
            <div
              className={
                this.state.wordSearh != "" && this.state.select
                  ? styles.openDropdown
                  : styles.closeDropdown
              }
            >
              <div className={styles.line}></div>
              <div className={styles.alingboxDropdown}>
                <div className={styles.boxDropdown}>
                  <Image
                    src="/lupa.svg"
                    width="22"
                    height="22"
                    layout="fixed"
                    alt="github"
                    quality={40}
                  />
                  <div className={styles.textSearch}>
                    {this.state.wordSearh}
                  </div>
                </div>

                <div
                  onClick={() => this.handleSearh("reposition")}
                  className={styles.buttonSearch}
                >
                  All Repositories ↵
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.alingboxDropdown}>
                <div className={styles.boxDropdown}>
                  <Image
                    src="/lupa.svg"
                    width="22"
                    height="22"
                    layout="fixed"
                    alt="github"
                    quality={40}
                  />
                  <div className={styles.textSearch}>
                    {this.state.wordSearh}
                  </div>
                </div>
                <div
                  className={styles.buttonSearch}
                  onClick={() => this.handleSearh("users")}
                >
                  All Users ↵
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dia}>
          {this.state.dia ? (
            <div onClick={()=> this.dayModde()}>
              <Image
                src="/sun.png"
                width="30"
                height="30"
                layout="fixed"
                alt="github"
                quality={40}
              />
            </div>
          ) : (
            <div onClick={()=>this.dayModde()}>
              <Image
                src="/fase-lunar.png"
                width="30"
                height="30"
                layout="fixed"
                alt="github"
                quality={40}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ reloadusers }) => ({
  reloadusers
});

const mapDispatchToProps = {
  searchUsers,
  searchReposition
};
export default connect(mapStateToProps, mapDispatchToProps)(navbar);
