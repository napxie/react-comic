import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
class Choice extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="精选"/>
                <h1>Choice</h1>
                <Footer />
            </div>
        )
    }
}

export default Choice

