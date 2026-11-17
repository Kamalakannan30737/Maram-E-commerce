import { NavLink, Outlet } from "react-router";

const adminLinks = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Products", path: "/admin/products" },
    { name: "Categories", path: "/admin/categories" },
    { name: "Inventory", path: "/admin/inventory" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Customers", path: "/admin/customers" },
    { name: "Shipping", path: "/admin/shipping" }
] 

export default function AdminLayout() {
    return (
        <div className="min-h-screen flex bg-gray-500">
            <aside className="w-64 bg-slate-900 text-white p-5 shrink-0">
                <h1 className="text-2xl font-bold mb-8">
                    Admin Panel
                </h1>
                <div className="flex flex-col gap-4">
                    {adminLinks.map(({ name, path }) => (
                        <NavLink key={path} to={path} className={({ isActive }) => `px-4 py-3 rounded-lg text-sm transition-colors ${ isActive ? "bg-blue text-white" : "text-gray-400 hover:bg-slate-900"}`}>
                            {name}
                        </NavLink>
                    ))}
                </div>
            </aside>
            <div className="flex-1 min-w-0">
                <header className="h-16 bg-white border-b justify-between items-center px-6">
                    <h3 className="font-semibold text-gray-700">
                        Admin Management
                    </h3>
                    <NavLink to="/admin/login" className="text-xl text-blue-700">
                        Logout
                    </NavLink>
                </header>
                <main className="px-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}