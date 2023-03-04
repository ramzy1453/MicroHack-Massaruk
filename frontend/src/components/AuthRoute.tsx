import Cookies from "js-cookie"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

type Props = {children : ReactNode}

export default function AuthRoute({children}: Props) {
    const {auth} = useAuth()
        if(auth.token) {
    return <>{children}</>
        }
    return (
        <Navigate to='/'/>
    )
}