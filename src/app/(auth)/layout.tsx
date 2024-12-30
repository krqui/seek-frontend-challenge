import styles from "@/app/(auth)/styles.module.css";
import UserProvider from "@/lib/features/user/UserProvider";

export const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <UserProvider>
      <div className={styles.main}>{children}</div>
    </UserProvider>
  );
};

export default AuthLayout;
