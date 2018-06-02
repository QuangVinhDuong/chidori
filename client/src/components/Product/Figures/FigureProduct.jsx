import React, { Component } from 'react';

class FigureProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            figObject: []
        }
    }

    componentDidMount() {
        this.getFigureByID();
    }

    getFigureByID() {
        const { id } = this.props.match.params;
        fetch('/product/getFigureByID/'+id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(json => {
                this.setState({
                    figObject: json
                });
            });
    }

    render() {
        const arr = this.state.figObject;
        return (
            <div className="container">
                {
                    arr.map((item, index) => 
                        <div>
                        <h2>{item.productName}</h2>
                        <img src={'../'+item.productImage} alt={item.productName}/>
                        <p>{item.description}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default FigureProduct;