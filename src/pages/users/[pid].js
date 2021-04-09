import React from 'react'
import UsersMod from '../../modules/Users'
import axios from 'axios'
import {reloadusers} from '../../actions/users.action'
import { connect } from 'react-redux'
import Router from 'next/router'
export const Users =  (props) => {

    return (
      <>
        <UsersMod repositoriesCount={props.repositoriesCount} Users={props.Users}/>
      </>
    )
}
const mapStateToProps = ({clienteReducers}) => ({
  clienteReducers
})

const mapDispatchToProps = {
  reloadusers
}

export async function getServerSideProps(ctx) {
  const getUsers = await axios.get(`https://api.github.com/search/users?q=${ctx.query.pid}&per_page=10&page=${ctx.query.pagina==undefined?1:ctx.query.pagina}`,{
    auth: {
      username: process.env.NEXT_PUBLIC_USER,
      password: process.env.NEXT_PUBLIC_PASS
    }
  })
  const getRepositories = await axios.get(`https://api.github.com/search/repositories?q=${ctx.query.pid}`,{
    auth: {
      username: process.env.NEXT_PUBLIC_USER,
      password: process.env.NEXT_PUBLIC_PASS
    }
  })
  return {props: {Users: getUsers.data, repositoriesCount: getRepositories.data.total_count}}
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)
