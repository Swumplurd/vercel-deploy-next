import Link from "next/link";
import { useRouter } from "next/router";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function About() {
  const { asPath } = useRouter();
  return (
    <>
      <h1>About Page</h1>

      <h1 className="title">
        Ir a{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </h1>

      <p className="description">
        Get started by editing
        <code className="code">pages{asPath}.tsx</code>
      </p>
    </>
  );
}

About.getLayout = function (page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
