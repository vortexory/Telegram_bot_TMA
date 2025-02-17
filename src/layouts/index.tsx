import { useMemo } from "react";
import Nav from "./nav";
import { useLocation } from "react-router-dom";

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    const location = useLocation()

    const isShowNav = useMemo(() => ['/', '/shop', '/leaders', '/friends', '/quests'].includes(location.pathname), [location.pathname])
    const isAdmin = useMemo(() => location.pathname.includes('/admin'), [location.pathname])
    return (
        <div className="main bg-black">
            {isShowNav && <Nav isAdmin={isAdmin} />}
            {children}
        </div>
    )
}

export default AppLayout