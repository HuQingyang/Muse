
import { createElement, diff, patch } from './dom';
import { Observer } from './observer/index';



class Component {
    constructor() {
        this.state = Observer.from(
            this.state,
        );
    }

    state = {};

    // TODO: LifeCycle
    componentWillMount() {};
    componentDidMount() {};
    componentWillReceiveProps() {};
    shouldComponentUpdate() {
        return true
    };
    componentWillUpdate() {};
    componentDidUpdate() {};
    componentWillUnmount() {};
    componentDidCatch() {};

    // Render
    render() {}
    diff() {};
    patch() {};
    renderTo(entry) {
        console.log(this.render());
        this.entry = entry;
        this.entry.appendChild(
            createElement(this.render())
        )
    };
}



export default Component;
