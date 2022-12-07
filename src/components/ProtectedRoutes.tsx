import { useRouter } from "next/router";
import React from "react";
import { useContextDetails } from "src/context/ContextProvider";

interface Props {
  children: any;
}
export const ProtectedRoutes: React.FunctionComponent<Props> = ({
  children,
}) => {
  const router = useRouter();
  const { user }: any = useContextDetails();

  if (!user) {
    router.push("/signin");
  }
  return children;
};
