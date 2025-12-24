import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import LoginModal from '../components/LoginModal';

const MainLayout = ({ children, cartProps, authProps, layoutProps }) => {

  const { isLoginPage } = layoutProps;

  return (
    <div className="app-wrapper">
      <LoginModal
        isOpen={authProps.isLoginModalOpen}
        onClose={() => authProps.setIsLoginModalOpen(false)}
      />

      {!isLoginPage && (
        <Header
          cartCount={cartProps.cartItems.length}
          onOpenCart={() => cartProps.setIsCartOpen(true)}
        />
      )}

      <main className="main-content">
        {children}
      </main>

      <CartDrawer
        isOpen={cartProps.isCartOpen}
        onClose={() => cartProps.setIsCartOpen(false)}
        cartItems={cartProps.cartItems}
        onRemoveItem={cartProps.onRemoveItem}
      />

      {!isLoginPage && <Footer />}
    </div>
  );
};

export default MainLayout;