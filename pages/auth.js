<<<<<<< HEAD
import Image from "next/image";
import Head from "next/head";
=======
// import Head from "next/head";
import Image from "next/image";
>>>>>>> 543133048fbcb1f3e3a39e25a5bda0e903cf076a
// import { useSession, signIn, signOut } from "next-auth/react";
import Loading from "@/components/Loading";
let signIn;
let signOut

export default function Auth() {
  // const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return <Loading />;
  // }

  return (
    <>
      // <Head>
        <title>Movie App | Backend</title>
      // </Head>

      <div className="container">
        <div className="loginfront flex flex-center">
          <div className="loginbox flex flex-col">
            <Image src="/img/abhi.jpg" width={250} height={250} />
            <h1>Welcome Admin of the Movie</h1>
            <p>
              Visit our main Website{" "}
              <a href="https://www.linkedin.com/in/abhishek_chaurasia_1">
                Abhishek Chaurasia
              </a>
            </p>
            {
            
            "df" ? (
              <button className="mt-2" onClick={() => signOut()}>
                Log Out Here
              </button>
            ) : (
              <button className="mt-2" onClick={() => signIn()}>
                Log in with Google
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}