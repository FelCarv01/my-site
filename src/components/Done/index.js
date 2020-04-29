import React from "react"
import Icons from "./Icons"
import iconNames from "./content"

import * as S from "./styled"

const Done = () => {
  return (
    <S.DoneIconWrapper>
      <S.DoneText>Desenvolvido com:</S.DoneText>
      <S.DoneIconList>
        {iconNames.map((names, i) => {
          const Icon = Icons[names.label]

          return (
            <S.DoneIconItem key={i}>
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.DoneIconItem>
          )
        })}
      </S.DoneIconList>
    </S.DoneIconWrapper>
  )
}
export default Done
