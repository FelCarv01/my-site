import styled from "styled-components"
import Link from "gatsby"

export const ProfileWrapper = styled.section`
  color: #fafeff;
  display: flex;
  flex-direction: column;
`
export const ProfileLink = styled(Link)`
  color: #fafeff;
  text-decoration: node;
  transition: color 0.5s;

  &:hover {
    color: #42aaff;
  }
`
