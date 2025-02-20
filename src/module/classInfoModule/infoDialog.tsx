import { useAppSelector, useAppDispatch } from "Hooks/storeHooks"
import Dialog from "Components/dialog"
import styled from "styled-components";
import Icon from "Components/Icon";
import Title from "Components/Title";
import { setShowInfoDialog } from "./classInfoSlice";
import userIcon from 'Assets/icon_user.png'
import { ReactNode, useState } from "react";
import AlignCenterContainer from "Components/alignCenterContainer";
import TabButton from "Components/tabButton";
import StudentListTag from "./studentListTag";
import GroupTag from "./groupTag";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
  padding: 0px 12px;
  margin-bottom: 8px;
`
const ContentContainer = styled.div`
  flex:1;
  background-color:white;
  overflow:scroll;
`

interface Tab {
  tabName: string;
  content: ReactNode;
}


const InfoDialog = () => {
  const dispatch = useAppDispatch();
  const showInfoDialog = useAppSelector((state) => state.classInfoReducer.showInfoDialog);
  const [activedTab, setActivedTab] = useState(0);

  if (typeof showInfoDialog === 'boolean') {
    return null; 
  }

  const {
    className:theClassName='',
    totalStudents='',
    totalSeats=0,
    students=[],
  } = showInfoDialog;

  const handleClose = () => {
    dispatch(setShowInfoDialog(false))
  }

  const handleChangeTab = (tagIndex:number) => {
    setActivedTab(tagIndex);
  }

  const tabList:Tab[] = [
    {tabName:'Student List', content:<StudentListTag studentList={students} totalSeats={totalSeats} theClassName={theClassName}/>},
    {tabName:'Group', content:<GroupTag />},
  ]

  return (<Dialog show={!!showInfoDialog} handleDialogClose={() => handleClose()}>
    <TitleContainer>
      <Title>{theClassName}</Title>
      <Icon src={userIcon}/>
      <Title>{`${totalStudents}/${totalSeats}`}</Title>
    </TitleContainer>
    <AlignCenterContainer style={{margin:'0px 12px' ,gap:'10px'}}>
      {tabList.map((e,index)=>{
        return <TabButton text={e.tabName} actived={activedTab===index} onClick={()=>handleChangeTab(index)} key={`${index}-tagBtn`}/>
      })}
    </AlignCenterContainer>
    <ContentContainer>
    {
      tabList[activedTab].content
    }
    </ContentContainer>
  </Dialog>)
}

export default InfoDialog;