import React from 'react';

class stock extends React.Component {
    render() {
        return (
            <div>
                stock {this.props.name}, advice {this.props.advice}

            </div>
    )
    }
}

export default stock;