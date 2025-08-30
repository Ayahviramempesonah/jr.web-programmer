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
        <div className="px-6 py-12 md:px-24 md:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter text-slate-800 md:text-4xl">
                Tentang Sekolah Kami
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm font-normal leading-relaxed text-slate-600 md:text-lg">
                Sekolah Cerdas adalah lembaga pendidikan yang berkomitmen untuk
                memberikan pendidikan berkualitas tinggi kepada siswa dari
                berbagai latar belakang. Kami percaya bahwa setiap siswa
                memiliki potensi untuk mencapai kesuksesan, dan kami berdedikasi
                untuk membantu mereka mencapai tujuan mereka.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 rounded-lg md:flex-row md:gap-12">
              <div
                className="aspect-[4/5] w-full max-w-md flex-1 rounded-xl bg-cover bg-center bg-no-repeat shadow-lg"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHmMcFjPv4Eh54-4xGHehriImlL4tqoWQk9f_dhXVsfDLtKnO1dT5hoCHIyOrw_kjFV2vGFywWyWAwgkbH847ngUj738D95ESniUgvNuvCtWJBvRnCWLdltgTGc98xzh9jzIL_OSeQM6Yrgq64oRCVcO4DMOA3vlNeEKvHfIc7j4spjpI2RFo25GcozReW3qfnqSVTZ01zCiUhYYS0KL-IevFK1CHtKvS1NvE2ysA22Yz6UB6I3eiURZOpGF0LtKz8r3BccjPAca7Y")`,
                }}
              ></div>
              <div className="flex flex-1 flex-col gap-4">
                <h3 className="text-2xl font-bold leading-tight tracking-tighter text-slate-800 md:text-3xl">
                  Sambutan Kepala Sekolah
                </h3>
                <p className="text-base font-semibold leading-relaxed text-slate-500 md:text-lg">
                  Ibu Sarah spd.
                </p>
                <p className="text-sm font-normal leading-loose text-slate-600 md:text-base">
                  &quot;Selamat datang di Sekolah Cerdas! Kami sangat senang
                  menyambut Anda di komunitas kami yang dinamis dan bersemangat.
                  Di Sekolah Cerdas, kami percaya pada kekuatan pendidikan untuk
                  mengubah kehidupan dan membentuk masa depan yang lebih baik.
                  Kami berkomitmen untuk menciptakan lingkungan belajar yang
                  inklusif, menantang, dan mendukung, di mana setiap siswa dapat
                  berkembang secara akademis, sosial, dan emosional.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
