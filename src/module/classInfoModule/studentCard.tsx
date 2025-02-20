import { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div<{isGuest:boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border:${({isGuest,theme})=>`1px solid ${isGuest?theme.colors.grey:theme.colors.blue}`}; 
  border-radius: 8px; 
  width: 120px;
  background-color: #f0f0f0;
`;

const IdContainer = styled.div<{isGuest:boolean}>`
  background-color: ${({isGuest, theme})=>isGuest?theme.colors.grey:theme.colors.blue};
  color: white;
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  text-align:center;
  font-size: 16px;
  font-weight: bold;
`;


const NameContainer = styled.div<{isGuest:boolean}>`
  margin: 16px;
  font-size: 20px;
  font-weight: bold;
  color:${({isGuest, theme})=>isGuest?theme.colors.grey:'black'};
`;

const Divider = styled.hr<{isGuest:boolean}>`
  width: 100%;
  margin: 0;
  border-color: ${({isGuest, theme})=>isGuest?theme.colors.grey:theme.colors.blue};
`

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  padding:4px;
  justify-content: space-between;
`;

const PositiveButton = styled.button<{isGuest:boolean}>`
  background-color: ${({isGuest, theme})=>isGuest?theme.colors.grey:theme.colors.green};
  border: none;
  padding: 2px 6px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  &:focus{
  outline:none;
  }
`;

const NagetiveButton = styled.button<{isGuest:boolean}>`
  background-color: ${({isGuest, theme})=>isGuest?theme.colors.grey:theme.colors.red};
  border: none;
  padding: 2px 6px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  &:focus{
  outline:none;
  }
`;

const ValueText = styled.span<{isGuest:boolean}>`
  font-size: 18px;
  min-width: 30px;
  text-align: center;
  font-weight: bold;
  color: ${({isGuest, theme})=>isGuest?theme.colors.grey:'black'};
`;

interface StudentCardProps {
  classNo: number;
  name: string;
  score: number;
}

const StudentCard = (props:StudentCardProps) => {

    const {
        classNo,
        name='',
        score:defaultScore = 0,
    } = props;

    const [score,setScore] = useState(defaultScore)

    const isGuest:boolean = name === 'Guest';

  const handleDecrease = () => {
    if(!isGuest){
      setScore(score-1)
    }
  };

  const handleIncrease = () => {
    if(!isGuest){
      setScore(score+1)
    }
  };

  return (
    <CardContainer isGuest={isGuest}>
      <IdContainer isGuest={isGuest}>
        {classNo.toString().padStart(2, '0')}
      </IdContainer>
      <NameContainer isGuest={isGuest}>
        {name}
      </NameContainer>
      <Divider isGuest={isGuest}/>
      <ValueContainer>
        <NagetiveButton isGuest={isGuest} onClick={handleDecrease}>-1</NagetiveButton>
        <ValueText isGuest={isGuest}>{score}</ValueText>
        <PositiveButton isGuest={isGuest} onClick={handleIncrease}>+1</PositiveButton>
      </ValueContainer>
    </CardContainer>
  );
};



export default StudentCard;