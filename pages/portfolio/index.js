import { useRouter } from "next/router";

//Navigating Programmatically
function PorfolioPage() {
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
    <div>
      <h2> This is Portfolio Page</h2>
      <button
        className=" bg-stone-500 hover:bg-stone-400"
        onClick={loadProjectHandlerProject}
      >
        Load the Portfolio
      </button>
    </div>
  );
}

export default PorfolioPage;
