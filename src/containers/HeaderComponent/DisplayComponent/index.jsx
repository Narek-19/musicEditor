import React, {useState} from 'react';
import * as Styled from './styled'
import {connect} from 'react-redux'
import {setColor} from '../../../redux/actions/action'
import {getColor} from '../../../redux/selectors';

function Display(props){
    const {color,setColor} = props;
    const [colorValue, setColorValue] = useState(color);
    const [timer, setTimer] = useState(null);

const onChangeColor = (e) => {
    setColorValue(e.target.value);
    clearTimeout(timer);
    setTimer(setTimeout(() => setColor(e.target.value), 1000));
}

    return (
    <>
        <Styled.Display color= {color}>
            <p>{color}</p>
            <input 
                type ="text"
                value = {colorValue}
                onChange = {onChangeColor}
            />
        </Styled.Display>
    </>
    )
}
const mapStateToProps = (state) =>({
    color: getColor(state),
    
})
export default connect(mapStateToProps,{setColor})(Display);