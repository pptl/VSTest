import { useAppSelector, useAppDispatch } from "Hooks/storeHooks"
import Dialog from "Components/dialog"
import styled from "styled-components";
import Icon from "Components/Icon";
import backIcon from 'Assets/icon_back.png'
import Title from "Components/Title";
import { setShowJoinDialog } from "./classInfoSlice";
import CopyButton from "Components/copyButton";

import AlignCenterContainer from "Components/alignCenterContainer";


const DialogContant = styled.div`
  padding: 0px 12px;
`;

const ReturnButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size:12px;
`;

const CopyBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px
`

const QRCodeImage = styled.img`
  src:${(props)=>props.src};
  width: 80%;
  height: 80%;
  
`
const QrCodeContainer = styled.div`
  display: flex;
  justify-content: center;
`


const JoinDialog = () => {
  const dispatch = useAppDispatch();
  const showJoinDialog = useAppSelector((state) => state.classInfoReducer.showJoinDialog);
  
  if (typeof showJoinDialog === 'boolean') {
    return null; 
  }

  const {
    classId = '',
    className = '',
    classLink = '',
    qrCode = '',
  } = showJoinDialog;

  const handleClose = () => {
    dispatch(setShowJoinDialog(false))
  }

  return (<Dialog show={!!showJoinDialog} handleDialogClose={() => handleClose()}>
    <div>
      <ReturnButton onClick={() => handleClose()}>
        <AlignCenterContainer >
          <Icon src={backIcon} />
          Back To Class List
        </AlignCenterContainer>
      </ReturnButton>
    </div>
    <DialogContant>
      <Title>{`Join ${className}`}</Title>
      <CopyBtnContainer>
      <AlignCenterContainer>
        <div>{`ID:${classId}`}</div>
        <CopyButton textToCopy={classId} />
      </AlignCenterContainer>
      <AlignCenterContainer>
        <div>Link</div>
        <CopyButton textToCopy={classLink} />
      </AlignCenterContainer>
    </CopyBtnContainer>
    <QrCodeContainer>
    <QRCodeImage src={qrCode}/>
    </QrCodeContainer>
    </DialogContant>
  </Dialog>)
}

export default JoinDialog;