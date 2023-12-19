import Link from "next/link";
function ClientPage() {
  const clients = [
    { id: "124", name: "ashish" },
    { id: "125", name: "akash" },
    { id: "125", name: "arvind" },
  ];
  return (
    <>
      <h2>This is a Client Page</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ClientPage;
