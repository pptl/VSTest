import styled from "styled-components";
import { ReactNode } from 'react';

const TextContainer = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Title = ({ children }: { children: ReactNode }) => {

    return(<TextContainer>
{     children}
    </TextContainer>)
}

export default Title;