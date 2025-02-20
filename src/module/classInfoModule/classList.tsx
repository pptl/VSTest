import { useAppSelector,useAppDispatch } from "Hooks/storeHooks"
import { getClassList, setShowJoinDialog, ClassItem, getClassInfo } from 'Module/classInfoModule/classInfoSlice'
import { useEffect } from "react";
import JoinDialog from "Module/classInfoModule/joinDialog";
import InfoDialog from "Module/classInfoModule/InfoDialog";

import styled from 'styled-components';

const ClassListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin :10px;
  gap: 10px;
`;

const ClassCard = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ClassName = styled.span`
  flex: 1;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const JoinButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const InfoButton = styled.button`
  background-color: #008CBA;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function ClassList() {
  const dispatch = useAppDispatch();
  const classList = useAppSelector((state) => state.classInfoReducer.classList);

  const handleJoinClick = (item:ClassItem) => {
    dispatch(setShowJoinDialog(item))
  }

  const handleInfoClick = (id:string) => {
    dispatch(getClassInfo(id))
  }

  useEffect(()=>{
    dispatch(getClassList())
  },[dispatch])

  return (
    <>
   <ClassListContainer>
    {classList?.map((item, index) => (
        <ClassCard key={index}>
          <ClassName>{item.className}</ClassName>
          <ButtonContainer>
            <JoinButton onClick={()=>{handleJoinClick(item)}}>Join</JoinButton>
            <InfoButton onClick={()=>{handleInfoClick(item.classId)}}>Info</InfoButton>
          </ButtonContainer>
        </ClassCard>
      ))}
   </ClassListContainer>
   <JoinDialog/>
   <InfoDialog/>
   </>
  );
}

export default ClassList;