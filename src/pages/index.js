import React, { Component } from 'react'
import Home from '../modules/Home'
import Router from 'next/router';
import {useEffect} from 'react'
export default function home(props) {

  return (
    <>
      <Home />
    </>
  )
}

// export async function getServerSideProps(ctx) {

//   return { props: "" }
// } 