import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link className="mx-5" href="/">
          home
        </Link>
        <Link className="mx-5" href="/apod">
          apod
        </Link>
        <Link className="mx-5" href="/insight">
          weather forecast on mars
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
