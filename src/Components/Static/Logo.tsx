import React from 'react'
import styled from 'styled-components';


interface iLogo {
    title?: string;
}

const Logo: React.FC<iLogo> = ({title}) => {
  return (
    <div>
      {title}
      <Img />
    </div>
  )
}

export default Logo

const Img = styled.img`
width: 70`;