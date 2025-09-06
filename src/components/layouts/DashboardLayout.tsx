import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import type { UserContextType } from "../../../types";
import { Navbar } from "./Navbar";
import { SideMenu } from './SideMenu';


interface Props {
    children : React.ReactNode;
    activeMenu: string;
};

export const DashboardLayout: React.FC<Props> = ({ children, activeMenu }) => {

    const { user } = useContext(UserContext) as UserContextType;

    return (
        <div>
            <Navbar activeMenu={activeMenu} />

            {user && (
                <div className="flex">
                    <div className="max-[1080px]:hidden">
                    <SideMenu activeMenu={activeMenu}/>
                    </div>

                    <div className="grow mx-5">{children}</div>
                </div>
                
            )}
        </div>
    );
};
