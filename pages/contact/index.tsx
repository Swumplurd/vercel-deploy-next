import Link from "next/link";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Contact() {
  const { asPath } = useRouter();
  return (
    <MainLayout>
      <h1>Contact Page</h1>

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
    </MainLayout>
  );
}
