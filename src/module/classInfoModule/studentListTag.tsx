import StudentCard from "./studentCard";
import { Student } from "./classInfoSlice";
import styled from "styled-components";

const ListContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-wrap:wrap;
  gap:10px;
`
interface TagProps{
  studentList:Student[],
  totalSeats:number,
  theClassName:string,
}

const StudentListTag = (props:TagProps) => {

  const{
    studentList,
    totalSeats=0,
    theClassName=''
  }=props;

  const newList:Student[] = [];

  //自動補齊Guest
  for(let no = 1;no<=totalSeats;no++){
    let student = studentList.find(s=>s.classNo===no);
    if(student){
      newList.push(student)
    }else{
      newList.push({
        classNo:no,
        name:'Guest',
        score:0,
      })
    }
  }

    return <ListContainer>
      {
       newList.map(s=><StudentCard key={`${theClassName}-${s.classNo}-studentCard`} {...s}/>) 
      }
      </ListContainer>
}

export default StudentListTag;