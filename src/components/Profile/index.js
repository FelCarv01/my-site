import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return (
    <S.ProfileWrapper>
      <Avatar />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{description}</p>
    </S.ProfileWrapper>
  )
}

export default Profile
