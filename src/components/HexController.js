import React from 'react'

export const HexForm = props => {

    const { errorMsg } = props;
    console.log("errorMsg");
    console.log(errorMsg);
    console.log(props);
    const errorClass = errorMsg ? "errorMsg" : null;
    return (
    <div className="hexController" id="left">
        <form>
            <div className={errorClass}>
                <input type="text" onChange={e => props.changeHandle(e)} id='hexInput' placeholder=" Enter hex value here..."/>
            </div>

            <div id="errorMsgcont">
                {errorMsg && <div className={errorClass}> <p>{errorMsg}</p> </div>}
            </div>
        </form>
    </div> 
  )
}

export const HexColor = props => {
    const { color } = props 
    
    return (

    <div className="hexController" id='right' style={{backgroundColor: `#${color}` }}>
        #{color}
    </div>
  )
}

