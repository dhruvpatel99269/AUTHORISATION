import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link className="flex" href='/login'>SignIn</Link>
      </div>
      <div>
        <Link className="flex" href='/signup'>SignUp</Link>
      </div>
    </main>
  );
}
