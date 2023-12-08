import React, { useRef, useState } from 'react';
import '../../assets/index.less';
import '../../assets/basic.less';
import styled from 'styled-components';
import Tree, { TreeNode } from 'rc-tree';
import folder from '../../../assets/img/folder.png';
import openFolder from '../../../assets/img/open-folder.png';



const RCTree = (props) => {
  const { keys, onCheckKeysChange, treeData } = props;

  let selKey = null;

  const onExpand = (expandedKeys) => {
    // console.log('onExpand', expandedKeys);
  };

  const onSelect = (selectedKeys, info) => {
    // console.log('selected', selectedKeys, info);
    selKey = info.node.props.eventKey;
  };

  const onCheck = (checkedKeys, info) => {
    // console.log('onCheck', checkedKeys, info);
    onCheckKeysChange(checkedKeys, { node:info.node, checked:info.checked});
  };

  const onEdit = () => {
    setTimeout(() => {
      console.log('current key: ', selKey);
    }, 0);
  };

  const onDel = (e) => {
    if (!window.confirm('sure to delete?')) {
      return;
    }
    e.stopPropagation();
  };


  return (
    <StyledRCTree>
      <div style={{ margin: '0 20px' }}>
        <Tree
          className="myCls"
          showLine
          checkable
        //   selectable={false}
        //   defaultExpandAll
          autoExpandParent={true}
        //   expandedKeys={keys}
          onExpand={onExpand}
          checkedKeys={keys}
          defaultSelectedKeys={keys}
          defaultCheckedKeys={keys}
          onSelect={onSelect}
          onCheck={onCheck}
          treeData={treeData}
          // icon={<img style={{width:"16px", height:"16px"}} src={folder} alt="open-folder" />}
        />
      </div>
    </StyledRCTree>
  );
};

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