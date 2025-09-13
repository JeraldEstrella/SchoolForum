import { Home, FileText, Info } from 'lucide-react';
import './navigation.css';

const Navigation = () => {
  const links = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Posts', href: '/posts', icon: FileText },
    { label: 'About', href: '/about', icon: Info },
  ];

  return (
    <div className='navigation-container'>
      <span className='logo'>FORUM</span>
      <div className='navigation-links'>
        {links.map((link) => (
          <a href=''>
            <link.icon size={20} className='icon' />
            {link.label}
          </a>
        ))}
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navigation;
