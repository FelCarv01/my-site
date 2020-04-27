import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { position, description, author },
    },
  } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            position
            description
            author
          }
        }
      }
    `
  )
  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Avatar />
        <S.ProfileAuthor>
          {author}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
