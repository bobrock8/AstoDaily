import Image from "next/image";
import Navigation from "./_components/navigation";
import Logo from "./_components/logo";

export default function Home() {
  return (
    <div>
      <header className="flex flex-row items-center justify-between p-4">
        <Logo />
        <Navigation />
      </header>
      <main className="flex  flex-col items-center justify-between p-24">
        <article>
          <h1>Photo of the day</h1>
        </article>
      </main>
      <aside>Last 3 days photos</aside>
      <footer></footer>
    </div>
  );
}
