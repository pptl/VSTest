import { useAppSelector,useAppDispatch } from "Hooks/storeHooks"
import {getClassList} from './ClassInfoSlice'
import { useEffect } from "react";

import styled from 'styled-components';
import Btn from "Components/btn";

const ClassListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ClassCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
`;


function ClassList() {
  const dispatch = useAppDispatch();
  const classList = useAppSelector((state) => state.classInfoReducer.classList);

  useEffect(()=>{
    dispatch(getClassList())
  },[dispatch])

  return (
   <ClassListContainer>
    <Btn/>
   </ClassListContainer>
  );
}

export default ClassList;