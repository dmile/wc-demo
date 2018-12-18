import React, {Component} from "react";

export default class Counter extends Component {

    // interval = () => setInterval(() => {
    //     this.handleClick();
    // }, 50);
    //
    // componentDidMount() {
    //     this.intervalId = this.interval();
    // }

    handleClick = () => {
        this.props.onChange(this.props.count + 1);
    };

    // componentWillUnmount() {
    //     clearInterval(this.intervalId);
    // }

    render() {
        const {count} = this.props;
        return (
            <button onClick={this.handleClick}>
                Count: {count}
            </button>
        );
    }
};