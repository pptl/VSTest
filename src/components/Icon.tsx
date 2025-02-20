import styled from 'styled-components';

interface IconProps {
  src: string;
  width?: string;
  height?: string;
}

const Icon = styled.img<IconProps>`
  src: ${(props) => props.src};
  width: ${(props) => props.width || '16px'};
  height: ${(props) => props.height || '16px'};
`;

export default Icon;