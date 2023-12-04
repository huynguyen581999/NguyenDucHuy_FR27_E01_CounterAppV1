import React from "react";
import './Counter.scss';

class Counter extends React.Component {

    constructor() {
        super();
        this.myName = "Kmin";
        this.hello = this.hello.bind(this);
    }

    hello(str) {
        alert(str + ' ' + this.myName);
    }

    goodbye(str) {
        alert(str + ' ' + this.myName);
    }

    render() {
        return (
            <div class="counter">
                <h2 style={{ color: 'var(--red)', fontSize: '1.2em' }}>Bộ đếm Kmin</h2>
                <div style={{ fontWeight: 'bold' }}>1</div>
                <div class="counter__actions">
                    <button className="btn btn--yellow" onClick={() => this.hello('Xin chao')}>Xin chào</button>
                    <button className="btn btn--blue" onClick={() => this.goodbye('Tam biet')}>Tạm biệt</button>
                </div>
            </div >
        );
    }
}

export default Counter;