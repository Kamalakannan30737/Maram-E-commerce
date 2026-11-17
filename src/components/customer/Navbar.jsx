import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
    import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import logo from '../../assets/logo png BLACK.png'

const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const navigate = useNavigate();

    const closeDrawer = () => {
        setDrawerOpen(false);
        setShopOpen(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (!searchValue.trim()) return;

        navigate(`/products?search=${encodeURIComponent(searchValue.trim())}`);

        setSearchOpen(false);
        setSearchValue("");
    };



const cartItems = useSelector((state) => state.cart.items);

const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
);

    const linkClass = ({ isActive }) =>
        `relative py-2 text-[15px] font-medium transition-colors duration-200
        after:absolute after:bottom-0 after:left-0 after:h-[2px]
        after:bg-[#526747] after:transition-all after:duration-300
        ${isActive
            ? "text-[#263D26] after:w-full"
            : "text-[#333333] after:w-0 hover:text-[#526747] hover:after:w-full"
        }`;

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-[#EAE4DC] bg-[#FAF7F2]">

                {/* Desktop Navbar */}
                <nav className="mx-auto hidden h-[100px] max-w-[1600px] items-center justify-between px-8 lg:flex xl:px-12">

                    {/* Logo */}
                    <Link to="/" className="flex shrink-0 items-center">
                        <img
                            src={logo}
                            alt="WoodSlice - Handcrafted Cutting Boards"
                            className="h-auto w-[100px] object-contain"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex h-full items-center gap-10">

                        <NavLink to="/" end className={linkClass}>
                            Home
                        </NavLink>

                        {/* Shop Dropdown */}
                        <div className="relative flex h-full items-center">

                            <NavLink
                                type="button"
                                to="/products"
                                className={linkClass}
                            >
                                Products

                                {/* <ExpandMoreIcon
                                    className={`transition-transform duration-200 ${
                                        shopOpen ? "rotate-180" : ""
                                    }`}
                                    fontSize="small"
                                /> */}
                            </NavLink>

                            {/* {shopOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setShopOpen(false)}
                                    />

                                    <div className="absolute left-0 top-[75px] z-20 w-52 rounded-md border border-[#EAE4DC] bg-[#FAF7F2] py-2 shadow-lg">

                                        <Link
                                            to="/products"
                                            onClick={() => setShopOpen(false)}
                                            className="block px-5 py-3 text-sm text-[#333333] hover:bg-[#F0EBE3] hover:text-[#526747]"
                                        >
                                            All Products
                                        </Link>

                                    </div>
                                </>
                            )} */}
                        </div>

                        {navigationLinks.slice(1).map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={linkClass}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Action Icons */}
                    <div className="flex shrink-0 items-center gap-7">

                        <button
                            type="button"
                            onClick={() => setSearchOpen(!searchOpen)}
                            aria-label="Search products"
                            className="text-[#333333] transition-colors hover:text-[#526747]"
                        >
                            <SearchIcon fontSize="medium" />
                        </button>

                        <Link
                            to="/login"
                            aria-label="My Account"
                            className="text-[#333333] transition-colors hover:text-[#526747]"
                        >
                            <PersonIcon fontSize="medium" />
                        </Link>

                        <Link
                            to="/cart"
                            aria-label="Shopping Cart"
                            className="relative text-[#333333] transition-colors hover:text-[#526747]"
                        >
                            <ShoppingCartOutlinedIcon fontSize="medium" />

                            {/* Temporary cart count */}
                            <span className="absolute -right-2 -top-2 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#30472B] px-1 text-[10px] font-medium text-white">
                                {cartCount}
                            </span>
                        </Link>
                    </div>
                </nav>

                {/* Mobile / Tablet Navbar */}

{/* Mobile / Tablet Navbar */}
<nav className="grid h-[76px] grid-cols-[40px_minmax(0,1fr)_64px] items-center gap-2 px-4 lg:hidden">

    {/* Menu */}
    <button
        type="button"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open navigation menu"
        className="flex h-10 w-10 shrink-0 items-center justify-start text-[#333333]"
    >
        <MenuIcon fontSize="medium" />
    </button>

    {/* Logo */}
    <Link
        to="/"
        className="flex min-w-0 items-center justify-center"
    >
        <img
            src={logo}
            alt="WoodSlice"
            className="h-auto w-full max-w-[80px] object-contain"
        />
    </Link>

    {/* Actions */}
    <div className="flex shrink-0 items-center justify-end gap-3">

        <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search products"
            className="flex h-10 w-7 shrink-0 items-center justify-center text-[#333333]"
        >
            <SearchIcon fontSize="medium" />
        </button>

        <Link
            to="/login"
            onClick={closeDrawer}
            className="flex items-center gap-3 text-sm font-medium text-[#333333]"
        >
            <PersonIcon />
                       
        </Link>

        <Link
            to="/cart"
            aria-label="Shopping Cart"
            className="relative flex h-10 w-7 shrink-0 items-center justify-center text-[#333333]"
        >
            <ShoppingCartOutlinedIcon fontSize="medium" />

            <span className="absolute right-0 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#30472B] px-1 text-[10px] text-white">
               {cartCount}
            </span>
        </Link>

    </div>
</nav>


                {/* Search Bar */}
                {searchOpen && (
                    <form
                        onSubmit={handleSearch}
                        className="border-t border-[#EAE4DC] bg-[#FAF7F2] px-5 py-4"
                    >
                        <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-full border border-[#DCD5CB] bg-white px-5 py-3">

                            <SearchIcon className="text-[#777777]" />

                            <input
                                type="search"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search cutting boards..."
                                className="w-full bg-transparent text-sm text-[#333333] outline-none"
                                autoFocus
                            />

                            <button
                                type="submit"
                                className="text-sm font-medium text-[#526747]"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                )}

            </header>

            {/* Mobile Drawer Overlay */}
            {drawerOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
                    onClick={closeDrawer}
                />
            )}

            {/* Mobile Side Drawer */}
            <aside
                className={`fixed left-0 top-0 z-[70] flex h-dvh w-[82%] max-w-[340px] flex-col bg-[#FAF7F2] shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
                    drawerOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                aria-hidden={!drawerOpen}
            >

                {/* Drawer Header */}
                <div className="flex h-[76px] items-center justify-between border-b border-[#EAE4DC] px-5">

                    <Link to="/" onClick={closeDrawer}>
                        <img
                            src={logo}
                            alt="WoodSlice"
                            className="w-[100px] object-contain"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={closeDrawer}
                        aria-label="Close navigation menu"
                        className="text-[#333333]"
                    >
                        <CloseIcon />
                    </button>
                </div>

                {/* Drawer Links */}
                <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">

                    <NavLink
                        to="/"
                        end
                        onClick={closeDrawer}
                        className={linkClass}
                    >
                        Home
                    </NavLink>

                    {/* Shop */}
                    <div className="border-b border-[#EAE4DC] py-2">

                        <NavLink
                            to="/products"
                            className={linkClass}
                        >
                            Products

                            {/* <ExpandMoreIcon
                                className={`transition-transform ${
                                    shopOpen ? "rotate-180" : ""
                                }`}
                            /> */}
                        </NavLink>

                        {/* {shopOpen && (
                            <Link
                                to="/products"
                                onClick={closeDrawer}
                                className="block py-3 pl-4 text-sm text-[#666666] hover:text-[#526747]"
                            >
                                All Products
                            </Link>
                        )} */}
                    </div>

                    {navigationLinks.slice(1).map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={closeDrawer}
                            className={linkClass}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                </div>

                {/* Drawer Account */}
                {/* <div className="border-t border-[#EAE4DC] p-6">

                    <Link
                        to="/login"
                        onClick={closeDrawer}
                        className="flex items-center gap-3 text-sm font-medium text-[#333333]"
                    >
                        <PersonIcon />
                        My Account
                    </Link>

                </div> */}

            </aside>
        </>
    );
}
