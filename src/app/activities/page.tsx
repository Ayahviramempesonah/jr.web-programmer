export default function Activities() {
  return (
    <section className="items-center p-12">
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Kegiatan &amp; Acara Sekolah
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Temukan berbagai kegiatan ekstrakurikuler yang menarik dan
              bermanfaat di Sekolah Maju untuk mengembangkan minat dan bakat
              siswa di luar jam pelajaran.
            </p>
          </div>
        </div>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-12">
              Ekstrakurikuler
            </h3>
            <div className="grid grid-cols-1 gap-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h4 className="text-xl font-bold text-slate-900">
                    Klub Robotika
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Pelajari dasar-dasar robotika, pemrograman, dan desain
                    mekanik. Ikuti kompetisi robotika tingkat regional dan
                    nasional.
                  </p>
                </div>
                <div
                  className="order-1 md:order-2 w-full aspect-video rounded-lg bg-cover bg-center shadow-lg"
                  // https://lh3.googleusercontent.com/aida-public/AB6AXuAAGZsSI1RsbeWSHw7dLV0uEbWdyTZNDE8fA-9Woz08K9UFMChZxdmlAeReZedH3qK8BnoBBrPHYzQlrDfLjKLd5eqC-OVqwM7PAVsitqcWyRrRSbIhqvNUd_WwtJ8Otjyt6HAnHo_5y3SuxifFIQ9HcnXeYhZfSmCl6ED_otmBPb5KC_-zoeGiKWQh5TSykAJfp1JmcFB5B_iT_NL_6H5dmZ88-O4Rjx7PvrCKBxwVoJLB9hRdDqz_j3DPSemWBMhaOLV8ekuBmhBI")`
                  style={{
                    backgroundImage: `url("
                     https://lh3.googleusercontent.com/aida-public/AB6AXuAAGZsSI1RsbeWSHw7dLV0uEbWdyTZNDE8fA-9Woz08K9UFMChZxdmlAeReZedH3qK8BnoBBrPHYzQlrDfLjKLd5eqC-OVqwM7PAVsitqcWyRrRSbIhqvNUd_WwtJ8Otjyt6HAnHo_5y3SuxifFIQ9HcnXeYhZfSmCl6ED_otmBPb5KC_-zoeGiKWQh5TSykAJfp1JmcFB5B_iT_NL_6H5dmZ88-O4Rjx7PvrCKBxwVoJLB9hRdDqz_j3DPSemWBMhaOLV8ekuBmhBI")`,
                  }}
                ></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    Klub Debat
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Asah kemampuan berbicara di depan umum, berpikir kritis, dan
                    berargumentasi. Ikuti turnamen debat antar sekolah.
                  </p>
                </div>
                <div
                  className="order-1 w-full aspect-video rounded-lg bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage: ` url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxM6B7Jo-NFqb25xWFqeVOw7CqjNq_SFcA0KXqweLEZzct00oB_cmEVnVFRHbFZSstWvuKVE2YijG8bOI4vP66ZoPWuhbE-DHCS_LY3TAHwfPd23IpSPc4yOwuQiq217O22saHGEFgi8FOue6SslYjdinQvja1Z6FiIT89bxcsWF8qyklTqwtPM_rQdYUvD06gzCCUm6vEFRYtBZofD7JuMpRuPGnEokIvJDxkQ5tuv9xjWCmNqc0LF81pyMxKUL4KzkkjFmqNL6C7")`,
                  }}
                ></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h4 className="text-xl font-bold text-slate-900">
                    Klub Seni Rupa
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Ekspresikan diri melalui berbagai media seni, seperti
                    melukis, menggambar, dan patung. Pamerkan karya seni Anda
                    dalam pameran sekolah.
                  </p>
                </div>
                <div
                  className="order-1 md:order-2 w-full aspect-video rounded-lg bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfpZDKQDF29Vfk8MlDh6vxR5bcRvrAamLhcSrfpvN8Tfl02zxEg-0s7L0wmPcmZkljHB5oez4hJife9hzM_fdjMgndazobVjKDPtIspMg_Z-ohPWXaN2ug_n_g5RFIV8KpOuSMXUgEQL72RlaXHxqBV9hTPpyhlqRO6GV6BywNp7KNGRf7xyowXqXKfJhfchwPcaFLvJPZSgTEZtQ-ubmmOtxMxvpLR3PKfw_RljuKC0FRdFm3UbIpIE0gc8zm9Q-OntJ_PsvtgB2Z")`,
                  }}
                ></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    Klub Musik
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Bergabunglah dengan grup band sekolah atau orkestra.
                    Pelajari berbagai alat musik dan tampil dalam konser
                    sekolah.
                  </p>
                </div>
                <div
                  className="order-1 w-full aspect-video rounded-lg bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuANyum2J5IjyuwxnGM4SogJYGo8BrYoOxd6O771y5XIEI06CvRnurm_9jCezCgM-zMdAZNMXLIPP4VqQgjCeN59EJkmCi-qBkyZw4ZC4qt9Y_e5vw7IbjOQdreoqTefSr7QjA8p_KYHvqxKjidXAGl22OiZa-19Gdzx9x1Cl8lypwXqlFfcka0gPoZmYKcTG9vvLlTQB9h8K1GnJhHt82EC_f6-cVd4_srMsRaMkUcKNET58OlY7VhjEOjhqsvvQP9qggQt73viscHR")`,
                  }}
                ></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h4 className="text-xl font-bold text-slate-900">
                    Klub Olahraga
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Pilih dari berbagai cabang olahraga, seperti basket, voli,
                    sepak bola, dan bulu tangkis. Berlatih secara rutin dan
                    ikuti pertandingan antar sekolah.
                  </p>
                </div>
                <div
                  className="order-1 md:order-2 w-full aspect-video rounded-lg bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB16xi_SWEDPmPhCKrDN8FBasC1vCfw6FtTtTNNgGop_2yW5SV5AmQWLNc1akcSf_L0FLVEM9FoSPl3PzL4aqC8VzRW6J1mxNanpuKoMF6grHtTAszprwAqqnDotze_BIch9_nrOMWxzNbbBdHcDEzorD6azb2r7bW1m2QLKX8nBiehSEme6DpzOoUhznC6mGXkppfwHjbyzh9NbGG0EwYnRUSZ-P-SBwdAA3CLqSgJ0CNOEqouriBBA8a3tUYJKwH80zxhPOTzSrq1")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
