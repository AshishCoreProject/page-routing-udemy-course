import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <div>
        <Head>
          <meta
            name="description"
            content="Find a lot of great events that allow you to evolve"
          />
        </Head>
      </div>
      <div>
        <h1>The Home Page</h1>
        <ul>
          <li>
            <Link className="text-orange-500 " href="/portfolio">
              PortFolio
            </Link>
          </li>
          <li>
            <Link className="text-orange-500 " href="/clients">
              Clients
            </Link>
          </li>

          <li>
            <Link className="text-orange-500" href="/clients/ashish">
              Client Id
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
