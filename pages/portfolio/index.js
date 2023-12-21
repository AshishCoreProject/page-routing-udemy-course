import { useRouter } from "next/router";
import Head from "next/head";
import image from "../../public/personImg.jpeg";
import Image from "next/image";
//Navigating Programmatically
function PortfolioPage() {
  const router = useRouter();

  function loadProjectHandlerProject() {
    // router.push("portfolio/project123");
    //router.replace(portfolio/project123)
    router.push({
      pathname: "portfolio/[projectId]",
      query: { projectId: "project123" },
    });
  }

  return (
    <>
      <div>
        <Head>
          <title>Portfolio page</title>
          <meta name="description" content={`${router}`} />
        </Head>
      </div>

      <div>
        <h2> This is Portfolio Page</h2>
        <button
          className=" bg-stone-500 hover:bg-stone-400"
          onClick={loadProjectHandlerProject}
        >
          Load the Portfolio
        </button>
      </div>
      <div>
        <Image src={image} alt="personImage" width={340} height={160} />
      </div>
    </>
  );
}

export default PortfolioPage;
