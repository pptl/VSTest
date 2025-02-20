import styled from 'styled-components';
import Icon from './Icon';
import copyIcon from 'Assets/icon_copy.png'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

const CopyText = ({textToCopy}:{textToCopy:string}) => {

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        window.alert(`${textToCopy}-复制成功！`)
      })
      .catch(() => {
        window.alert('复制失敗！')
      });
  };

  return (
    <Container>
        <Icon onClick={handleCopyClick} width='24px' height='24px' src={copyIcon}/>
        </Container>
  );
};


export default CopyText;