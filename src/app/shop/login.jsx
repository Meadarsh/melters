import React from 'react'
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
export default withPageAuthRequired(function Login () {

  return (
    <div className=' bg-white h-36 w-64'>login</div>
  )
}
)
