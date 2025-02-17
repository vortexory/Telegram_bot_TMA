import { useMemo } from "react";
import Nav from "./nav";
import { useLocation } from "react-router-dom";

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    const location = useLocation()

    const isShowNav = useMemo(() => ['/', '/cards', '/leaders', '/friends', '/quests'].includes(location.pathname), [location.pathname])
    const isAdmin = useMemo(() => location.pathname.includes('/admin'), [location.pathname])
    console.log(isShowNav,"lsaidjfjasljdfl");
    return (
        <>
            {isShowNav && <Nav isAdmin={isAdmin} />}
            <div className={isShowNav ? `${isAdmin ? "mt-39" : "mt-25"} py-12.5 px-30 bg-tangerine` : ""}>
                {children}
            </div>
        </>
    )
}

export default AppLayout