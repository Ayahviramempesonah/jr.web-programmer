export default function About() {
  return (
    <section className="items-center p-12 bg-slate-500">
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sejarah Sekolah</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Sekolah Jaya didirikan pada tahun 1995 dengan visi untuk menciptakan
            lingkungan belajar yang inovatif dan inklusif. Berawal dari sebuah
            gedung sederhana, sekolah ini telah berkembang menjadi institusi
            pendidikan terkemuka dengan fasilitas modern dan program pendidikan
            yang komprehensif.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Visi</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Menjadi pusat pendidikan unggulan yang menghasilkan generasi
              berkarakter, berprestasi, dan berwawasan global.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Misi</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-base leading-relaxed text-gray-700">
              <li>Menyediakan kurikulum yang relevan dan menantang.</li>
              <li>
                Menciptakan lingkungan belajar yang aman, nyaman, dan mendukung.
              </li>
              <li>
                Mengembangkan potensi siswa secara holistik melalui kegiatan
                intrakurikuler dan ekstrakurikuler.
              </li>
              <li>
                Membangun kemitraan yang kuat dengan orang tua, alumni, dan
                masyarakat.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Nilai-Nilai</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-base leading-relaxed text-gray-700">
            <li>
              <strong>Integritas:</strong> Kejujuran dan tanggung jawab dalam
              setiap tindakan.
            </li>
            <li>
              <strong>Keunggulan:</strong> Berusaha mencapai standar tertinggi
              dalam semua aspek.
            </li>
            <li>
              <strong>Inovasi:</strong> Mendorong kreativitas dan pemikiran
              kritis.
            </li>
            <li>
              <strong>Inklusivitas:</strong> Menghargai keberagaman dan
              menciptakan lingkungan yang adil.
            </li>
            <li>
              <strong>Kolaborasi:</strong> Bekerja sama untuk mencapai tujuan
              bersama.
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
