import Image from "next/image";
import { imageUrl } from "../../public/image";

export default function Home() {
  return (
    <>
    <section className="items-center p-14">
      <div
        className="flex min-h-[400px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-8 text-center md:min-h-[560px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdOsAosXnESQ8u3DAmuXoeFtSfqrA6NImSZh7nP06k2KzxYmpoYoUqHZa2nwuC4DvMwI0pDkHrcE8tEQjnH5YFYWHnDbV9iZq1Rj0k5Rn5gavqfaRc7nLEpbc8KGUBYhrOjCniV_txnjvRNbEm7OWncCKuZGHH7a0agK70TUrGmbbo-zPXP4oP9e9gqqZZamCRPvJNaIgy3uecDvJf3IHlx4s66c5Yty8cxG0RVXbkE1Q7Z90oJCGw5blCQJd7zqRv8hE9rRmFt4s6")`,
        }}
      >
        <div className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter text-white md:text-5xl">
            Selamat Datang di Sekolah Cerdas
          </h1>
          <p className="text-sm font-normal leading-relaxed text-slate-200 md:text-lg">
            Membangun Generasi Unggul Melalui Pendidikan Berkualitas dan
            Lingkungan Belajar yang Inspiratif.
          </p>
        </div>
        <button className="mt-4 flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#ea2a33] px-6 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-[#c8222a]">
          <span className="truncate">Jelajahi Lebih Lanjut</span>{" "}
        </button>
      </div>
    </section>

<section>

      </section>

    </>
  );
}
