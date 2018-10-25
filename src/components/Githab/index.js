import 'antd/dist/antd.css';
import React, {PureComponent} from 'react';
import '../../index.css'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import { getOpenedPullRequests } from '../../actions/githab';
import connect from "react-redux/es/connect/connect";

class Githab extends PureComponent{
    render(){
        const {
            showData,pullList
        } = this.props;
        console.log(pullList)
        return(
            <div>
                <Row className={'list-title'}>
                    <Col span = {6} push ={9}>
                      <span className={'title-text'}>
                        You can get your github projects opened pull requests
                      </span>
                    </Col>
                </Row>
                <Row className={'button-row'}>
                    <Col span = {6} push ={10}>
                        <Button type="primary" onClick={() => this.props.getOpenedPullRequests()}>Get opened pull requests</Button>
                    </Col>
                </Row>
              {showData &&
                <Row className={'pull-list-block'}>
                  <Col span = {6} push ={9}>
                    <Row>
                    {pullList.map((pull) =>
                      <Col>
                      <Row>
                        <li><a className={'pull-request'} href={pull.html_url} target="_blank">Merge <span className={'head-branch'}>{pull.head.ref}</span> into <span className={'base-branch'}>{pull.base.ref}</span></a></li>
                      </Row>
                      <Row>
                        <Col span={12} push={1}>
                        author <a href={pull.user.html_url} target="_blank">{pull.user.login}</a>
                        </Col>
                      </Row>
                      </Col>
                    )}
                    </Row>
                  </Col>
                </Row>
              }

            </div>
        )

    }
}
const mapStateToProps = state => ({
    showData: state.githab.githab.showData,
    pullList: state.githab.githab.pullList
});

export default connect(mapStateToProps, { getOpenedPullRequests })(Githab);
