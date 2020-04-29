import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import Done from "../Done"

import * as S from "./styled"

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
      <Done />
    </S.SidebarWrapper>
  )
}

export default Sidebar
