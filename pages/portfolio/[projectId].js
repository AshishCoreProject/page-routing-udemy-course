import { useRouter } from "next/router";
function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router);
  console.log(router.pathname); // It gives the pathname in encode way.

  console.log(router.query); //it gives the concerete path name of dynamic route

  //send a request to some backend server to fetch the
  //piece of data with an id of router.query.projectid
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
export default PortfolioProjectPage;
