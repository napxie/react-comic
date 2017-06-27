import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import Header from '../../components/Header'
import Category from '../../components/Category'
import List from './subpage/List'
import Footer from '../../components/Footer'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="主页"/>
                <Category />
                <List />
                <Footer />
            </div>
        )
    }
}

export default Home
