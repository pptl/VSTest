import styled from "styled-components";
import React from 'react';

interface AlignCenterContainerProps {
  style?: React.CSSProperties;
}

const AlignCenterContainer = styled.div<AlignCenterContainerProps>`
  display: flex;
  align-items: center;
`;

export default AlignCenterContainer;