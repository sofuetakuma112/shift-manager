import React from "react";
import Link from "next/link";
import { ProtectedPage } from "@/components/ProtectedPage";

const Hoge = () => {
  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
      <Link href="/">rootページへ</Link>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await unstable_getServerSession(context.req, context.res, {});

//   console.log("session: %o", session);

//   if (!session) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/auth/login",
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

export default Hoge;
