import React, { FC, ReactNode } from "react";

type Props = {
  admin: ReactNode;
  user: ReactNode;
};

function checkUserRole() {
  return "admin";
}

const Layout: FC<Props> = ({ admin, user }) => {
  const role = checkUserRole();
  return <div>{role === "admin" ? admin : user}</div>;
};

export default Layout;
