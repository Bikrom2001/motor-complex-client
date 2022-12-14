import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Share/Header/Header';
import { AuthContext } from '../context/AuthProvider';
import AdminUser from '../Hooks/AdminUser';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);
    const [isAdmin] = AdminUser(user?.email)

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                   <Outlet></Outlet>
                    
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Orders</Link></li>
                      {isAdmin && <li><Link to='/dashboard/users'>All Users</Link></li>}
                      <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
                      <li><Link to='/dashboard/manageproduct'>My Products</Link></li>
                       
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;