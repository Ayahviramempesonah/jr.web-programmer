import Image from "next/image";

export default function News() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-center mb-12">
            Berita &amp; Kegiatan Sekolah
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group flex flex-col overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl bg-white">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  alt="Siswa berprestasi"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMk4L_7qjQ5AfdM-5UX5cdOuTmrpwuEPbv-O9x85vPL25dNh0HMBGucFlOIy2xR0xL9_UjxRBnMoEnT1Sz36MfXYtGu4R6B5XfLfE_UgLd2DseAKYQKAVnHupv5BYCkGJAsHN2BSw9TW_DyFQTVAXvVc4Wil-lKsujN5WoUIQmqhLYVSWadSAkWtvdgWBCIIPu2lqRnbxSXaQOtv8RfuJWjWpVQvHd01M8gEDWZvfi7TTsoIxzPXeDF4ZVDu4_EEgV4rK81SLfQras"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold leading-snug mb-2 text-slate-600 transition-colors">
                  Siswa Sekolah Jaya Raih Juara Olimpiade Sains Nasional
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 flex-grow">
                  Siswa Sekolah Jaya berhasil meraih juara 1 dalam Olimpiade
                  Sains Nasional tingkat provinsi. Prestasi ini membuktikan
                  kualitas pendidikan di Sekolah Jaya.
                </p>
              </div>
            </div>
            <div className="group flex flex-col overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl bg-white">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  alt="Kegiatan bakti sosial"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeJ-JN3XRbxt-vjoyFDsTenWy1lLVlSsvaqEEJLt2rclNpz7Xl86A1JcDfhMFSRBFzrQODnm4M-p9RsYLoIfpRqB3QJzgM9b6cG6vjdMNo04Bbe6zwVNBinIm3dz8ha_fiLeFCdooVHB7xJvLHOEWjBrbbWBwdlwcJCHidDj5u7ghU0Jm_csgjSc5dcku2e8JPZYufXzrTnYqju7IwN7HOZHOIT1lmLQnnkSuV0GSK98vQ553dJmnWXkYLUTk_KscavdH9y2IAUbaY"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold leading-snug mb-2 text-slate-600 transition-colors">
                  Sekolah Jaya Gelar Acara Bakti Sosial
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 flex-grow">
                  Sekolah Jaya mengadakan acara bakti sosial dengan tema Peduli
                  Sesama yang melibatkan seluruh siswa dan guru. Acara ini
                  bertujuan untuk menanamkan nilai-nilai sosial dan kepedulian
                  terhadap sesama.
                </p>
              </div>
            </div>
            <div className="group flex flex-col overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl bg-white">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  alt="Pengumuman sekolah"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmettXagm24fu1R7-vjTyW68-MNvytbEdpNb1D-Ize32Brr8nrCwSq0QF1ofR4z69N_D_mHYuHvx0-SSaEW6xMrIdRmmvKrTce6NOOnjNLjtfhJNOqBa14xbM46NMASqJbf6o2uuTf1jdJKwkxsx52NTWAlEANiRSOx6nHBIaVSlVwqDyJOjFml0D_vMvVoMfxlCzWn0eUElh7k5IiYIn94ICpiN7i7N4PZj8SRhigE915UOokkBp2-1cx1hD__eC8AsBSlgUO2BGj"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold leading-snug mb-2 text-slate-600 transition-colors">
                  Informasi Penting: Perubahan Jadwal Ujian
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 flex-grow">
                  Terdapat perubahan jadwal ujian akhir semester yang akan
                  dilaksanakan pada tanggal 10-15 Desember 2024. Mohon
                  perhatikan informasi terbaru ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
