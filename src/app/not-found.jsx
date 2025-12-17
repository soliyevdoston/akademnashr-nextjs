import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Kechirasiz, siz qidirgan sahifa topilmadi
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
