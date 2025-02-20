import styled from 'styled-components';
import { ReactNode } from 'react';
import Icon from 'Components/Icon';
import closeIcon from 'Assets/icon_close.png'

const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogContent = styled.div`
  background-color:${({theme})=>theme.colors.lightGrey} ;
  margin: 0px;
  border-radius: 5px;
  width:80vw;
  height:90vw;
  min-height:450px;
  max-height: 740px;
  max-width: 740px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:focus{
  	outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  padding:16px 16px 0px 16px
`;

type dialogTypes = {
  show: boolean,
  handleDialogClose: Function,
  backgroundColor?:string,
  children?: ReactNode,
}

const Dialog = (props: dialogTypes) => {

  const {
    show = false,
    handleDialogClose = () => { },
    children,
  } = props;


  return (<>{show && <DialogWrapper>
    <DialogContent>
      <ButtonContainer>
        <CloseButton onClick={() => handleDialogClose()}>
          <Icon src={closeIcon} />
        </CloseButton>
      </ButtonContainer>
      {children}
    </DialogContent>
  </DialogWrapper>}</>)
}

export default Dialog;