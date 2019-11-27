const render = require('./render').render;
const Component = require('./render').Component;

function createElement(tag, attrs, ...children) {
    return{
        tag,
        attrs,
        children
    }
}

const React = {
    createElement,
    Component
}

const ReactDOM = {
    render: (vnode, container) => {
        container.innerHTML = '';
        return render(vnode, container);
    }
}

function Welcome(props) {
    return <h1>hello,{props.name}</h1>;
}

class Welcome2 extends React.Component{
    render() {
        return<h1>hello-components2,{this.props.name}</h1>
    }
}

ReactDOM.render (
    <div>
        <Welcome name="tianye1"/>
        <Welcome name="tianye2"/>
        <Welcome2 name="tianye3"/>
    </div>,
    document.getElementById('root')
)

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num : 0
        }
    }

    componentWillUpdate() {
        console.log('update');
    }

    componentDidUpdate() {
        console.log('updated');
    }

    componentWillMount() {
        console.log('mount');
    }

    componentDidMount() {
        console.log('mounted');
    }

    onClick() {
        this.setState({
            num: this.state.num + 1
        })
    }

    render() {
        return (
            <div onClick={this.onClick.bind(this)}>
                <h1>number: {this.state.num}</h1>
                <button>add</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div>这是我的counter<Counter /></div>,
    document.getElementById('main')
)