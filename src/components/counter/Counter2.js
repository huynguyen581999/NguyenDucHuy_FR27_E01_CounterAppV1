import React from "react";
import './Counter.scss';

const Counter2 = () => {

    const myName = "Kmin";

    const hello = (str) => {
        alert(str + ' ' + myName);
    }

    const goodbye = (str) => {
        alert(str + ' ' + myName);
    }

    return (
        <div class="counter">
            <h2 style={{ color: 'var(--red)', fontSize: '1.2em' }}>Bộ đếm Kmin</h2>
            <div style={{ fontWeight: 'bold' }}>1</div>
            <div class="counter__actions">
                <button className="btn btn--yellow" onClick={() => hello('Xin chao')}>Xin chào</button>
                <button className="btn btn--blue" onClick={() => goodbye('Tam biet')}>Tạm biệt</button>
            </div>
        </div >
    );
}

export default Counter2;