"use client"

import {SessionProvider} from "next-auth/react";
const AuthProvider = ({children})=>{
    return (
        <SessionProvider basePath="/api/auth">{children}</SessionProvider>
    )
}

export default AuthProvider;

// git-main-bhanu2004.vercel.app
// current-insight-emh2qsslh-bhanu2004.vercel.app