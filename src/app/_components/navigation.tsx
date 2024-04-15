import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link href="/">home</Link>
        <Link href="/apod">apod</Link>
        <Link href="/insight">weather forecast on mars</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
