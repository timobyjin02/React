// react 함수 컴퍼넌트 만들기

import React from "react";

function Clock(props) { // Clock 컴퍼넌트
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;