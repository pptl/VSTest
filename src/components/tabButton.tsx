import styled from "styled-components";

const Tab = styled.div<{actived:boolean}>`
    background-color:${(props)=>props.actived?'white':props.theme.colors.grey};
    cursor: pointer;
    border-radius:10px 10px 0px 0px;
    width: 150px;
    height:40px;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:${(props)=>props.actived?props.theme.colors.blue:'black'}
`

type TabButtonProps = {
    text:string,
    actived:boolean,
    onClick:Function,
}

const TabButton = (props:TabButtonProps) => {
    const {
        text = '',
        actived = false,
        onClick = () => {},
    } = props;
    return (<Tab actived={actived} onClick={()=>onClick()}>
        {text}
    </Tab>)
}

export default TabButton;