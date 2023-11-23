import { Config } from "./config"


export const RoleAPI = {
    getRoleList:async (parms:{loginUserId:string, loginRoleLevel:number,loginRoleId:number,langType:string})=>{
        return fetch(Config.apiAddress+'role/list',{
            method: "POST",
            headers: {  
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                ...parms
            })
        }).then(res=>res.json())
    },
    getRoleLevelSelectList:async (parms:{loginUserId:string, loginRoleLevel:number,loginRoleId:number,langType:string})=>{
        return fetch(Config.apiAddress+'/selectlist/level',{
            method: "POST",
            headers: {  
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                ...parms
            })
        }).then(res=>res.json())
    },
    addRole:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:number,
        langType:string,    
        roleName:string,
        roleDescription:string,
        roleLevel:number
    })=>{
        return fetch(Config.apiAddress+'/role/add',{
            method: "POST",
            headers: {  
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                ...parms
            })
        }).then(res=>res.json())
    },
    deleteRole:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:number,
        langType:string,    
        roleId:string,
    })=>{
        return fetch(Config.apiAddress+'/role/del',{
            method: "POST",
            headers: {  
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                ...parms
            })
        }).then(res=>res.json())
    },
    getRoleDetail:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,    
        roleId:string,
    })=>{
        return fetch(Config.apiAddress+'/role/detail',{
            method: "POST",
            headers: {  
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                ...parms
            })
        }).then(res=>res.json())
    },
    getGroupList:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,    
    })=>{
        return fetch(Config.apiAddress+'/group/list',{
            method: "POST",
            headers: {  
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                ...parms
            })
        }).then(res=>res.json())
    },
    getFuncGroupList:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,    
    })=>{
        return fetch(Config.apiAddress+'/func/list',{
            method: "POST",
            headers: {  
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                ...parms
            })
        }).then(res=>res.json())
    },
}