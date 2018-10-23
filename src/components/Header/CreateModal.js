import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Modal from 'antd/lib/modal';
import Input from 'antd/lib/input';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { closeDeleteWorkspaceModal, inputFillRequested, createNewItem, urlInputFillRequested } from '../../actions/homepage';


class CreateModal extends PureComponent {
  render() {
    const {
      isVisible, selectedItem, closeDeleteWorkspaceModal: onCancel, createNewItem: onOk
    } = this.props;
    return (
      <div>
        <Modal
          title= {'Close |'}
          visible={isVisible}
          onOk={() => onOk({nameInputVal: this.props.nameInputVal, urlInputVal: this.props.urlInputVal})}
          onCancel={onCancel}
        >
          <div>
            <Row>
              <span>Create an {selectedItem}</span>
            </Row>
            <Row>
              <Col span={8}>
                <label>{selectedItem} Name</label>
              </Col>
              <Col span={16}>
                <Input value={this.props.nameInputVal} onChange={(e) => this.props.inputFillRequested(e.target.value)}/>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <label>{selectedItem} URL</label>
              </Col>
              <Col span={16}>
                <Input value={this.props.urlInputVal} onChange={(e) => this.props.urlInputFillRequested(e.target.value)}/>
              </Col>
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isVisible: state.homepage.createModal.isVisible,
  selectedItem: state.homepage.createModal.selectedItem,
  nameInputVal: state.homepage.createModal.nameInputVal,
  urlInputVal: state.homepage.createModal.urlInputVal
});

export default connect(mapStateToProps, {closeDeleteWorkspaceModal, inputFillRequested, createNewItem, urlInputFillRequested})(CreateModal);
