import React, {Component} from 'react';
import {Link} from 'react-router';
import './style.less'
class Footer extends Component {
    render() {
        let arr = [];
        arr[this.props.index] = 'on';
        return (
            <div id="common-footer">
                <ul className="clear-fix">
                    <li>
                        <Link to="/">
                            <i className="icon-user"></i>主页
                        </Link>
                    </li>
                    <li>
                        <Link to="/Discover">
                            <i className="icon-user"></i>发现
                        </Link>
                    </li>
                    <li>
                        <Link to="/Choice">
                            <i className="icon-user"></i>精选
                        </Link>
                    </li>
                    <li>
                        <Link to="/Me">
                            <i className="icon-user"></i>我的
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer