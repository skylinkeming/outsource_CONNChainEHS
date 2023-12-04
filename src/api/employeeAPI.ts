import { Config } from "./config"


export const EmployeeAPI = {
    getEmployeeList:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:number,
        langType:string,
        queryOid?:string,
        keyword:string,
        queryLabId:string,
    })=>{
        return fetch(Config.apiAddress+'user/list',{
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
    deleteUser:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,
        userId:string,
    })=>{
        return fetch(Config.apiAddress+'user/del',{
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
    getUserDetail:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,
        userId:string,
        roleId:string,
    })=>{
        return fetch(Config.apiAddress+'user/detail',{
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
    editUserDetail:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,
        userId:string,
        userName:string,
        jobTitleId:number,
        jobTitle:string,
        userEmail:string,
        userEmail2:string,
        userExt:string,
        userPhone:string,
        orgId:string,
        userBirthday:string,
        userGender:string,
        origUnit:string,
    })=>{
        return fetch(Config.apiAddress+'/user/edit',{
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
    getGroupDetail:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string, 
        groupId:string   
    })=>{
        return fetch(Config.apiAddress+'/group/detail',{
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
    saveRoleFuncs:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,  
        roleId:string,
        objFuncId:string[]
    })=>{
        return fetch(Config.apiAddress+'/objfunc/edit',{
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