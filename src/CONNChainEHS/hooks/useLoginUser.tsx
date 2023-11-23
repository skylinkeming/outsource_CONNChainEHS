import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function useLoginUser() {
    const { i18n } = useTranslation();
    const [loginUser, setLoginUser] = useState<{
        loginUserId: string,
        loginRoleLevel: number,
        loginRoleId: string,
        langType: string
    }>();

    useEffect(() => {
        if (!loginUser && localStorage.getItem("loginUser")) {
            let user = JSON.parse(localStorage.getItem("loginUser")!)
            user.langType = i18n.language;
            setLoginUser(user)
        }
        // return () => {

        // };
    }, []);

    return loginUser;
}


