import React from 'react';

class Main extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Main.jsx Rendered</p>
                {this.props.children}
            </div>
        )
    }
}

export default Main;