import React from 'react'
import Styled from 'styled-components'
import { DeleteOutlined } from '@ant-design/icons'
const StyledWrapper = Styled.div`
box-shadow: 0 0 6px 0 rgba(0,0,0,0.5);
margin: 16px;
padding: 8px;
width: 15%;
    height: 16%;
.top{
    display: flex;
    justify-content: space-between;
    align-items:center;
}
.Dico{
    color:red;
    cursor:pointer;
}

`

const WordCards = (props) => {
    return (
        <StyledWrapper>
            <div className="top">
                <div>
                    <b>{props.word}</b><span> [ {props.types.join(", ")} ]</span>
                </div>
                <DeleteOutlined className="Dico" />
            </div>
            <div>
                {props.meanings.join(", ")}
            </div>
        </StyledWrapper>
    )
}

export default WordCards
