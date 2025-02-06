import styles from "./Header.module.scss";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
}

export default Header;
