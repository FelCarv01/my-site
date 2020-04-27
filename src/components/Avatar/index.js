import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "felipe.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 85, maxHeight: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} alt="Felipe Carvarlho" />
  )
}

export default Avatar
