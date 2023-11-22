import { useState, useEffect } from 'react';

export default function useLoginUser() {
    const [loginUser, setLoginUser] = useState<{
        loginUserId: string,
        loginRoleLevel: number,
        loginRoleId: string
    }>();

    useEffect(() => {
        if (!loginUser && localStorage.getItem("loginUser")) {
            const user = JSON.parse(localStorage.getItem("loginUser")!)
            setLoginUser(user)
        }
        return () => {

        };
    }, []);

    return loginUser;
}


