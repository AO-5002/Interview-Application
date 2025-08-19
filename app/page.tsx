import LoginBtn from "@/components/AuthComponents/LoginBtn";

export default function Home() {
  return (
    <main className="grid grid-cols-4 min-h-screen p-4">
      <div className="col-start-2 col-span-2 border p-8 w-full h-full flex flex-col items-center justify-center gap-4">
        <h1>Interview App</h1>
        <LoginBtn />
      </div>
    </main>
  );
}
