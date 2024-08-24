import { Navigate } from "react-router-dom"
import { isUserLoggetIn } from "../Utils"

interface RouterProtectorProps{
    children: React.ReactNode
}

const RouterProtector: React.FC<RouterProtectorProps> = ({
    children
}) => {
    const isLoggetIn = isUserLoggetIn()
    if(isLoggetIn) {
        return<>{children}</>
    }
    return<Navigate to={'/auth'}/>
}

export default RouterProtector