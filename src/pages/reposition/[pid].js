import React, { Component } from 'react'
import Reposition from '../../modules/reposition'
import axios from 'axios'
export const reposition =  (props) => {
  return (
    <>
      <Reposition repositoriesCount={props.repositoriesCount} Users={props.Users}/>
    </>
  )
}
export default reposition

export async function getServerSideProps(ctx) {
  const getReposition = await axios.get(`https://api.github.com/search/users?q=${ctx.query.pid}&per_page=10&page=1`,{
    auth: {
      username: process.env.NEXT_PUBLIC_USER,
      password: process.env.NEXT_PUBLIC_PASS
    }
  })
  const getRepositories = await axios.get(`https://api.github.com/search/repositories?q=${ctx.query.pid}&per_page=10&page=1`,{
    auth: {
      username: process.env.NEXT_PUBLIC_USER,
      password: process.env.NEXT_PUBLIC_PASS
    }
  })
  return {props: {Users: getReposition.data, repositoriesCount: getRepositories.data}}
}