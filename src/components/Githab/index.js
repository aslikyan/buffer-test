import 'antd/dist/antd.css';
import React, {PureComponent} from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import { getOpenedPullRequests } from '../../actions/githab';
import connect from "react-redux/es/connect/connect";

class Githab extends PureComponent{
    render(){
        const {
            showData
        } = this.props;
        return(
            <div>
                <Row>
                    <Col span = {6} push ={9}>
                        You can get your githab projects opened pull requests
                    </Col>
                </Row>
                <Row>
                    <Col span = {6} push ={10}>
                        <Button type="primary" onClick={() => this.props.getOpenedPullRequests()}>Get opened pull requests</Button>
                    </Col>
                </Row>
            </div>
        )

    }
}
const mapStateToProps = state => ({
    showData: state.githab.showData
});

export default connect(mapStateToProps, { getOpenedPullRequests })(Githab);
