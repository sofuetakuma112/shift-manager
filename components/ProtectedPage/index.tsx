import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ProtectedPage: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    // SessionProviderでラップしている場合はloadingには成らない？？
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/auth/login");
    return <></>;
  }

  return <>{children}</>;
};
