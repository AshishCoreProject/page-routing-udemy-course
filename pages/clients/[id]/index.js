import { useRouter } from "next/router";
function ProjectId() {
  const router = useRouter();
  const query = router.query.id;

  return (
    <div>
      <p>{query}</p>
      <h2>This is project id page.</h2>
    </div>
  );
}
export default ProjectId;
