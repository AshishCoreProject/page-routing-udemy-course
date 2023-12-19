import { useRouter } from "next/router";
function ClientprojectPage() {
  const router = useRouter();
  const query = router.query.Clientproject;
  return (
    <div>
      <p>{query}</p>
      <h2>This is Client Project Page</h2>
    </div>
  );
}

export default ClientprojectPage;
