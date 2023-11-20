


export const RoleAPI = {
    getRoleList: (parms:{loginUserId:string, loginRoleLevel:number,loginRoleId:number,langType:string})=>{
        return fetch('https://ehs.connchain.net/ehsapi/api/34567890/role/list',{
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