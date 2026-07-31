import { useState } from 'react';
import { Button, Drawer } from 'antd';
import { FaCode } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import './Header.css';

const Header = () => {
  // Controls whether the mobile drawer menu is open
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo section */}
        <div className="header-logo">
          <FaCode className="header-logo-icon" />
          <span className="header-logo-text">Qamar Zaman</span>
        </div>

        {/* Desktop navigation links */}
        <nav className="header-nav">
          <a href="#home" className="header-nav-link">Home</a>
          <a href="#about" className="header-nav-link">About</a>
          <a href="#skills" className="header-nav-link">Skills</a>
          <a href="#projects" className="header-nav-link">Projects</a>
          <a href="#contact" className="header-nav-link">Contact</a>
        </nav>

        {/* Desktop Hire Me button */}
        <Button type="primary" className="header-btn">
          Hire Me
        </Button>

        {/* Hamburger icon - visible only on mobile */}
        <HiMenu className="header-hamburger" onClick={() => setDrawerOpen(true)} />
      </div>

      {/* Mobile drawer menu */}
      <Drawer
        title={
          <div className="header-logo">
            <FaCode className="header-logo-icon" />
            <span className="header-logo-text">Qamar Zaman</span>
          </div>
        }
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <nav className="header-drawer-nav">
          <a href="#home" className="header-drawer-link" onClick={() => setDrawerOpen(false)}>Home</a>
          <a href="#about" className="header-drawer-link" onClick={() => setDrawerOpen(false)}>About</a>
          <a href="#skills" className="header-drawer-link" onClick={() => setDrawerOpen(false)}>Skills</a>
          <a href="#projects" className="header-drawer-link" onClick={() => setDrawerOpen(false)}>Projects</a>
          <a href="#contact" className="header-drawer-link" onClick={() => setDrawerOpen(false)}>Contact</a>
          <Button type="primary" block>
            Hire Me
          </Button>
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
