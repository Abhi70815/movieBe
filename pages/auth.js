// import Head from "next/head";
import Image from "next/image";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/router";
// import Loading from "@/components/Loading";
let signIn;
let signOut;

export default function Auth() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // if (status === "loading") {
  //   return <Loading />;
  // }

  // return (import Head from "next/head";
  import Image from "next/image";
  // import { useSession, signIn, signOut } from "next-auth/react";
  // import { useRouter } from "next/router";
  // import Loading from "@/components/Loading";
  let signIn;
  let signOut;

  export default function Auth() {
    // const { data: session, status } = useSession();
    // const router = useRouter();

    // if (status === "loading") {
    //   return <Loading />;
    // }

    return (
      <>
        {/* <Head> */}
          <title>Movie App | Backend</title>
        {/* </Head> */}

        <div className="container">
          <div className="loginfront flex flex-center">
            <div className="loginbox flex flex-col">
              <Image src="/img/abhi.jpg" width={250} height={250} />
              <h1>Welcome Admin of the Movie</h1>
              <p>
                Visit our main Website{" "}
                <a href="https://www.linkedin.com/in/abhishek_chaurasia_1">
                  abhishek Chaurasia
                </a>
              </p>
              {
                // session 
                "hiii" ? (
                  <button className="mt-2" onClick={signOut}>
                    Log Out Here
                  </button>
                ) : (
                  <button className="mt-2" onClick={signIn}>
                    Log in with Google
                  </button>
                )}
            </div>
          </div>
        </div>
      </>
    );
  }

  <>
    <Head>
      <title>Movie App | Backend</title>
    </Head>

    <div className="container">
      <div className="loginfront flex flex-center">
        <div className="loginbox flex flex-col">
          <Image src="/img/abhi.jpg" width={250} height={250} />
          <h1>Welcome Admin of the movie</h1>
          <p>
            Visit our main Website{" "}
            <a href="https://www.linkedin.com/in/Abhshek_chaurasia_1">
              Abhishek chaurasia
            </a>
          </p>
          {
            // session 
            "hiii" ? (
              <button className="mt-2" onClick={signOut}>
                Log Out Here
              </button>
            ) : (
              <button className="mt-2" onClick={signIn}>
                Log in with Google
              </button>
            )}
        </div>
      </div>
    </div>
  </>

}
