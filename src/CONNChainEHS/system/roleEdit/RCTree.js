import React from 'react';
import '../../assets/index.less';
import '../../assets/basic.less';
import styled from 'styled-components';
import Tree, { TreeNode } from 'rc-tree';
import folder from '../../../assets/img/folder.png';
import openFolder from '../../../assets/img/open-folder.png';



class RCTree extends React.Component {
    static defaultProps = {
        keys: ['0-0-0-0'],
    };

    constructor(props) {
        super(props);
        const { keys } = props;
        this.state = {
            defaultExpandedKeys: keys,
            defaultSelectedKeys: keys,
            defaultCheckedKeys: keys,
        };

        this.treeRef = React.createRef();
    }

    onExpand = expandedKeys => {
        console.log('onExpand', expandedKeys);
    };

    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
        this.selKey = info.node.props.eventKey;
    };

    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    onEdit = () => {
        setTimeout(() => {
            console.log('current key: ', this.selKey);
        }, 0);
    };

    onDel = e => {
        if (!window.confirm('sure to delete?')) {
            return;
        }
        e.stopPropagation();
    };

    setTreeRef = tree => {
        this.tree = tree;
    };

    render() {
        const customLabel = (
            <span className="cus-label">
                <span>operations: </span>
                <span style={{ color: 'blue' }} onClick={this.onEdit}>
                    Edit
                </span>
                &nbsp;
                <label onClick={e => e.stopPropagation()}>
                    <input type="checkbox" /> checked
                </label>
                &nbsp;
                <span style={{ color: '#EB0000' }} onClick={this.onDel}>
                    Delete
                </span>
            </span>
        );

        return (
            <StyledRCTree>
                <div style={{ margin: '0 20px' }}>
                    <Tree
                        className="myCls"
                        showLine
                        checkable
                        selectable={false}
                        defaultExpandAll
                        onExpand={this.onExpand}
                        defaultSelectedKeys={this.state.defaultSelectedKeys}
                        defaultCheckedKeys={this.state.defaultCheckedKeys}
                        onSelect={this.onSelect}
                        onCheck={this.onCheck}
                        treeData={this.props.treeData}
                        // icon={<img style={{width:"16px", height:"16px"}} src={folder} alt="open-folder" />}
                    />
                </div>
            </StyledRCTree>
        );
    }
}

export default RCTree;

const StyledRCTree = styled.div`
    font-size:16px;
    // .rc-tree-icon__open,.rc-tree-iconEle{
    //     width:18px !important;
    //     height:18px !important;
    //     background-image:url(${openFolder}) !important;
    //     background-position:0 !important;
    //     background-size: contain;
    //     background-size: 18px 18px;
    // }
    // .rc-tree-icon__close {
    //     background-image:url(${folder}) !important;
    //     background-position:0 !important;
    //     background-size: 16px 16px;
    // }
`;