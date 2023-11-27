import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "rc-tree/assets/index.css"
import { useTranslation } from 'react-i18next';



import RCTree from './RCTree';
import { SystemData, functionGropData } from './data';
import Footer from '../../layout/Footer';
import useLoginUser from '../../hooks/useLoginUser';
import { RoleAPI } from '../../../api/roleAPI';
import TopPanel from './TopPanel';

export interface RoleDetail {
  roleLevelName: string;
  roleLevel: number;
  roleName: string;
  roleDescription: string;
  roleId: string;
}

interface FuncData {
  funcId: string;
  funcName: string;
  disabled: boolean;
  hasPermission: boolean;
  checked: boolean;
  subMenuList: Array<FuncData>
}

function RoleEdit() {
  const { t } = useTranslation();
  const [roleDetail, setRoleDetail] = useState<RoleDetail>();
  const [groupData, setGroupData] = useState<Array<any>>([]);
  const [systemFuncGroup, setSystemFuncGroup] = useState<Array<any>>([]);
  const [selectedGroups, setSelectedGroups] = useState<Array<string>>([]);
  const [selectedFuncs, setSelectedFuncs] = useState<Array<string>>([]);


  const loginUser = useLoginUser();

  useEffect(() => {
    initData()
  }, [loginUser])


  const initData = () => {
    if (loginUser) {
      let params = new URL((window.location.href).toString()).searchParams;
      let roleId = params.get("roleId"); // is the string "Jonathan Smith".

      if (!roleId) {
        return;
      }
      RoleAPI.getRoleDetail({
        loginUserId: loginUser.loginUserId,
        loginRoleLevel: loginUser.loginRoleLevel,
        loginRoleId: loginUser.loginRoleId,
        langType: loginUser.langType,
        roleId: roleId!,
      }).then(result => {
        if (result.status === 'Success') {
          setRoleDetail(result.results);
          // setSelectedFuncs(['d7', 'f41'])
          setSelectedFuncs(result.results.objFuncId)
          console.log(result.results)
        } else {
          alert(result.message)
        }
      })

      RoleAPI.getGroupList({
        loginUserId: loginUser.loginUserId,
        loginRoleLevel: loginUser.loginRoleLevel,
        loginRoleId: loginUser.loginRoleId,
        langType: loginUser.langType,
      }).then(result => {
        console.log(result);
        if (result.status === 'Success') {
          // setRoleDetail(result.results);
          let targetGroupData = result.results.map((group: any) => {
            return {
              key: group.groupId,
              title: group.groupName,
              // children: []
            }
          })
          targetGroupData.unshift({
            key: "all",
            title: "全部"
          })
          setGroupData(targetGroupData)
        } else {
          alert(result.message)
        }
      })

      RoleAPI.getFuncGroupList({
        loginUserId: loginUser.loginUserId,
        loginRoleLevel: loginUser.loginRoleLevel,
        loginRoleId: loginUser.loginRoleId,
        langType: loginUser.langType,
      }).then(result => {
        console.log(result);
        if (result.status === 'Success') {
          let data = getFuncTree(result.results);
          setSystemFuncGroup(data)
        } else {
          alert(result.message)
        }
      })
    }
  }


  const getFuncTree = (dataList: Array<FuncData>) => {
    if (!dataList.length || !dataList) {
      return []
    }

    let targetGroupData = dataList.map((group: FuncData) => {
      let parentGroup: any = {
        key: group.funcId,
        title: group.funcName,
        checkable: !group.disabled,
        // disabled: !group.hasPermission,
        children: [],

      }
      if (group.subMenuList.length) {
        parentGroup.children = group.subMenuList.map((subGroup: any) => {
          return {
            key: subGroup.funcId,
            title: subGroup.funcName,
            // disabled: !group.hasPermission,
            children: getFuncTree(subGroup.subMenuList)
          }
        });

      }
      return parentGroup;
    })
    return targetGroupData;
  }

  const onGroupChecked = (groupId: string, checked: boolean) => {
    if (!loginUser) {
      return;
    }
    //取得功能群組對應的功能id
    RoleAPI.getGroupDetail({
      loginUserId: loginUser.loginUserId,
      loginRoleLevel: loginUser.loginRoleLevel,
      loginRoleId: loginUser.loginRoleId,
      langType: loginUser.langType,
      groupId: groupId
    }).then(result => {
      console.log(result.results.groupFuncId)
      if (checked) {
        setSelectedFuncs((prevState) => prevState!.concat(result.results.groupFuncId))
      } else {
        let remainedChecked = selectedFuncs.filter(checkedKey => !result.results.groupFuncId.includes(checkedKey))
        setSelectedFuncs(remainedChecked);
      }
    }).catch(err => {

    })
  }

  const saveRoleFuncs = () => {
    if (loginUser) {
      RoleAPI.saveRoleFuncs({
        loginUserId: loginUser!.loginUserId,
        loginRoleLevel: loginUser!.loginRoleLevel,
        loginRoleId: loginUser!.loginRoleId,
        langType: loginUser!.langType,
        roleId: roleDetail!.roleId!,
        objFuncId: selectedFuncs
      }).then(result => {
        if (result.status === 'Success') {
          console.log(result);
        } else {
          alert(result.message)
        }
      }).catch(err => {
        alert(err)
      })

    }
  }

  return (
    <RoleEditWrap>
      <div className="d-flex flex-column p-0" id="content">
        {/* BEGIN scrollbar */}
        <div className="app-content-padding flex-grow-1">
          {/* BEGIN bradcrumb */}
          <ol className="breadcrumb float-xl-end">
            <li className="breadcrumb-item"><a href="../index.html">{t("breadcrumb.home")}</a></li>
            <li className="breadcrumb-item active">{t("breadcrumb.system_manage_setting")}</li>
            <li className="breadcrumb-item"><a href="./roleClass.html">{t("breadcrumb.role_level_manage")}</a></li>
            <li className="breadcrumb-item active">角色編輯</li>
          </ol>
          {/* END breadcrumb */}
          {/* BEGIN page-header */}
          <h1 className="page-header">角色編輯</h1>
          {/* END page-header */}

          {/* BEGIN row */}
          <button type="button" className="btn btn-default fs-5 goBack"
            onClick={() => {
              window.history.back()
            }}
          >
            <i className="fas fa-arrow-left" /> {t("button.back")}
          </button>

          {/* 階層名稱說明 */}
          <TopPanel roleDetail={roleDetail} onEditSuccess={() => { initData() }} />
          {/* 綁定功能 */}
          <div className="card mt-3">
            <div className="card-body align-items-center p-4">
              <h3 className="d-inline me-3">請選擇此角色要綁定的功能</h3>
              <button type="button" className="btn btn-success fs-5" onClick={saveRoleFuncs}><i className="fas fa-floppy-disk"></i> 儲存角色功能設定</button>
              <div className="row justify-content-around mt-5">
                <div className="col-lg-4">
                  <div className="panel">
                    <h4 className="panel-heading bg-orange-700 text-white justify-content-center">功能群組</h4>
                    <div className="panel-body">
                      <RCTree
                        treeData={groupData}
                        keys={selectedGroups}
                        onCheckKeysChange={(checkedKeys: Array<string>, info: { node: any, checked: boolean }) => {
                          setSelectedGroups(checkedKeys);
                          console.log(info);
                          onGroupChecked(info.node.key, info.checked)
                        }}
                      />

                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="panel">
                    <h4 className="panel-heading bg-orange-700 text-white justify-content-center">系統功能</h4>
                    <div className="panel-body">
                      {!!systemFuncGroup && <RCTree
                        treeData={systemFuncGroup}
                        keys={selectedFuncs}
                        onCheckKeysChange={(checkedKeys: Array<string>) => {
                          setSelectedFuncs(checkedKeys);
                        }}
                      />}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mb-3">
                <div className="col-md-3 d-grid">
                  <button type="button" className="btn btn-success fs-5" onClick={saveRoleFuncs}>
                    <i className="fas fa-floppy-disk"></i> 儲存角色功能設定
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* END row */}
        </div>
        {/* END scrollbar */}
        {/* BEGIN #footer */}
        <Footer />
        {/* END #footer */}
      </div>
    </RoleEditWrap>
  );
}



const RoleEditWrap = styled.div`
  padding-bottom:150px;
  .nowrap {
    white-space:nowrap;
  }
`


export default RoleEdit;
