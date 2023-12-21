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
        currentPage:number,
        pageSize:number
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
    getJobTitles:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,
    })=>{
        return fetch(Config.apiAddress+'selectlist/config/type/subtype',{
            method: "POST",
            headers: {  
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                ...parms,
                configType:"user",
                configSubType:"jobtitle"
            })
        }).then(res=>res.json())
    },
    getUserRoleList:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,
        userId:string,
    })=>{
        return fetch(Config.apiAddress+'rou/list',{
            method: "POST",
            headers: {  
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                ...parms,
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
        roleId:string,
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
    changeUserStatus:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,  
        userId:string,
        userStatus:string  
    })=>{
        return fetch(Config.apiAddress+'user/update/status',{
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
    searchLab:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,  
        keyword:string,
        
    })=>{
        return fetch(Config.apiAddress+'lab/list',{
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
    joinLab:async (parms:{
        loginUserId:string, 
        loginRoleLevel:number,
        loginRoleId:string,
        langType:string,  
        userId:string,
        roleId:string,
        labId:string,
        orgId:string
    })=>{
        return fetch(Config.apiAddress+'rou/single/add',{
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