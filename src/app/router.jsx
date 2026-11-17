
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import CustomerLayout from "../layouts/CustomerLayout";
import AdminLayout from "../layouts/AdminLayout";
import PageHolder from "../components/common/PageHolder";
import Home from "../pages/customer/Home";
import Cart from "../pages/customer/Cart";

function Page({ title }) {
    return <PageHolder title={title} />;
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Customer Section */}
                <Route element={<CustomerLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Page title="Products Listing" />} />
                    <Route path="products/:productId" element={<Page title="Product Details" />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="checkout" element={<Page title="Checkout" />} />
                    <Route path="about" element={<Page title="Our Story" />} />
                    <Route path="reviews" element={<Page title="Reviews" />} />
                    <Route path="contact" element={<Page title="Contact Us" />} />
                    <Route path="account" element={<Page title="My Account" />} />
                    <Route path="account/addresses" element={<Page title="Saved Addresses" />} />
                    <Route path="orders" element={<Page title="My Orders" />} />
                    <Route path="orders/:orderId" element={<Page title="Order Details / Tracking" />} />
                    <Route path="policies/terms" element={<Page title="Terms & Conditions" />} />
                    <Route path="policies/privacy" element={<Page title="Privacy Policy" />} />
                    <Route path="policies/shipping" element={<Page title="Shipping Policy" />} />
                    <Route path="policies/refunds" element={<Page title="Refund Policy" />} />
                </Route>

                {/* Customer Authentication */}
                <Route path="/login" element={<Page title="Customer Login" />} />
                <Route path="/sign-up" element={<Page title="Customer Sign-Up" />} />

                {/* Admin Authentication */}
                <Route path="/admin/login" element={<Page title="Admin Login" />} />

                {/* Admin Section */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<Page title="Admin Dashboard" />} />
                    <Route path="products" element={<Page title="Products Management" />} />
                    <Route path="products/:productId/edit" element={<Page title="Edit Product" />} />
                    <Route path="categories" element={<Page title="Categories" />} />
                    <Route path="inventory" element={<Page title="Inventory Management" />} />
                    <Route path="orders" element={<Page title="Order Management" />} />
                    <Route path="orders/:orderId" element={<Page title="Order Fulfillment" />} />
                    <Route path="customers" element={<Page title="Customer Management" />} />
                    <Route path="shipping" element={<Page title="Shipping Management" />} />
                    <Route path="*" element={<Page title="404 - Page Not Found" />} />
                </Route>

                {/* Global Fallback */}
                <Route path="*" element={<Page title="404 - Page Not Found" />} />

            </Routes>
        </BrowserRouter>
    );
}
