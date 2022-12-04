import { useRouter } from "next/router";
import React from "react";
import { useUserAuth } from "src/context/ContextProvider";

interface Props {
  children: any;
}
export const ProtectedRoutes: React.FunctionComponent<Props> = ({
  children,
}) => {
  const router = useRouter();
  const { user }: any = useUserAuth();

  if (!user) {
    router.push("/signin");
  }
  return children;
};
