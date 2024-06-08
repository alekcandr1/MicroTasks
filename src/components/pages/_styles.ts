import styled from "styled-components";

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px; 

  NavWrapper > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`

const Gallery = styled.div`
  display: flex;
  gap: 10px;
  width: 90%;
  margin: 0 auto;
  
  img {width: 100%}
`


export const S={
    NavWrapper,Gallery
  }

