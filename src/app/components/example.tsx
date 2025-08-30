// "use client";
//
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// // import {
// //   FaTwitter,
// //   FaFacebookF,
// //   FaInstagram,
// //   FaBars,
// //   FaTimes,
// // } from "react-icons/fa";
// // import { HiOutlineChevronDown } from "react-icons/hi";
// // import { IconContext } from "react-icons";
//
// const SekolahCerdasLogo = () => (
//   <svg
//     fill="none"
//     viewBox="0 0 48 48"
//     xmlns="http://www.w3.org/2000/svg"
//     className="size-8 text-[#ea2a33]"
//   >
//     <path
//       clipRule="evenodd"
//       d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
//       fill="currentColor"
//       fillRule="evenodd"
//     ></path>
//     <path
//       clipRule="evenodd"
//       d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
//       fill="currentColor"
//       fillRule="evenodd"
//     ></path>
//   </svg>
// );
//
// const navLinks = [
//   { name: "Beranda", href: "#" },
//   { name: "Tentang Kami", href: "#" },
//   { name: "Akademik", href: "#" },
//   { name: "Kegiatan", href: "#" },
//   { name: "Pendaftaran", href: "#" },
// ];
//
// const activityData = [
//   {
//     name: "Hari Olahraga",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuABSUc2hg7xEVHKb6TyWZsUeenKzm4puGcBeSkoDlLklVB7K4iPMJ98wWIXMP4IogWujP2ZtOp6FBQvDThozgB0zbs-XcxuMbLXkpAG1r14NQn4H5A4pl9o5ljXQmZ18s-FYXcdu1IYPlQQ7HhmZshETshaH1TTXBGDirNBDkwXBBAWaMxnlydBdBtFzQNwAWnR_b8OFw0Q853iITxM2tDRBQ823URk13X8bYEZ3DhcjQ20wG4LPQT7LACafZtF14_ZPDp8d7LadFub",
//   },
//   {
//     name: "Pameran Sains",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuB7DNWhS8KVGAmPNP9ITvV01OIuxiI_pQbhMXSbgxiPV0Fq3nnmOhlkUTlbgCEKj272wkoWt42wb3-Qeyqe1jnZFCII64hGhr2bZkT39KI8HbyXLzxhhsVBPxJ3o9x-qXdUXFA_yKdk-ZpumHBchLFC4EzGyY5yKZnB1Yn3zbIuCVHzD2GCKfH1IMrwznUIly7meXwAevPRLc8nxJ8Trhqk1jhaP_QJqAAgX80iwFftqf9td3VjGraF9tD3EDihUPq28jMGyLW2HP_y",
//   },
//   {
//     name: "Festival Seni",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAjj09dKxqhATknE936sab8i6k0sBNhN_lW-rCVoR0w36-wvpliNAyRZuGfRc7LwUzNfayNf8kOrZpclJ7g71gVBuVAix2C-jXApzyitsPapyKmm2OkFdE-xBvxP6984AEHT3r7KY5QgKa2dYLGfCmYX51XB2M5lgBspy0xWgF_o0vkmxb8mTNk_0dI7FuT2HD1Q8t6nl3FHwqBWoMfzpQCsoVfc8wzAqsAGeiTUF1Few5nz1dMCZb3l2NnpCzhRMYUo-LSPXpTIcNV",
//   },
// ];
//
// // const socialLinks = [
// //   { icon: FaTwitter, href: "#" },
// //   { icon: FaFacebookF, href: "#" },
// //   { icon: FaInstagram, href: "#" },
// // ];
//
// const SekolahCerdas = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//
//   return (
//     <>
//       <Head>
//         <title>Sekolah Cerdas</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//
//       <div className="relative flex min-h-screen flex-col bg-[#f8f9fa] font-[Plus_Jakarta_Sans,Noto_Sans,sans-serif] text-slate-800">
//         <header className="fixed top-0 z-50 flex w-full items-center justify-between whitespace-nowrap bg-white px-6 py-4 shadow-sm md:px-10 md:py-6">
//           <div className="flex items-center gap-3">
//             <SekolahCerdasLogo />
//             <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
//               Sekolah Cerdas
//             </h2>
//           </div>
//           <nav className="hidden items-center gap-6 lg:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-base font-medium leading-normal text-slate-600 transition-colors hover:text-[#ea2a33]"
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#ea2a33] px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-[#c8222a]">
//               <span className="truncate">Hubungi Kami</span>
//             </button>
//           </nav>
//
//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden"
//             aria-label="Toggle mobile menu"
//           >
//             {isMobileMenuOpen ? (
//               {
//                 /* <FaTimes className="h-6 w-6 text-slate-800" /> */
//               }
//             ) : (
//               <FaBars className="h-6 w-6 text-slate-800" />
//             )}
//           </button>
//         </header>
//
//         {/* Mobile menu */}
//         <div
//           className={`fixed inset-y-0 right-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
//             isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="flex justify-end p-4">
//             <button
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="text-slate-800"
//               aria-label="Close mobile menu"
//             >
//               <FaTimes className="h-6 w-6" />
//             </button>
//           </div>
//           <nav className="flex flex-col items-start gap-4 p-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="w-full border-b border-gray-200 py-2 text-lg font-medium text-slate-600 transition-colors hover:text-[#ea2a33]"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <button className="mt-4 flex h-10 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#ea2a33] px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-[#c8222a]">
//               <span className="truncate">Hubungi Kami</span>
//             </button>
//           </nav>
//         </div>
//
//         <main className="flex flex-1 flex-col pt-20 md:pt-24">
//           {/* Hero Section */}
//           <div className="p-6 md:px-24 md:py-12">
//             <div className="relative overflow-hidden rounded-2xl">
//               <div
//                 className="flex min-h-[400px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-8 text-center md:min-h-[560px]"
//                 style={{
//                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdOsAosXnESQ8u3DAmuXoeFtSfqrA6NImSZh7nP06k2KzxYmpoYoUqHZa2nwuC4DvMwI0pDkHrcE8tEQjnH5YFYWHnDbV9iZq1Rj0k5Rn5gavqfaRc7nLEpbc8KGUBYhrOjCniV_txnjvRNbEm7OWncCKuZGHH7a0agK70TUrGmbbo-zPXP4oP9e9gqqZZamCRPvJNaIgy3uecDvJf3IHlx4s66c5Yty8cxG0RVXbkE1Q7Z90oJCGw5blCQJd7zqRv8hE9rRmFt4s6")`,
//                 }}
//               >
//                 <div className="flex max-w-3xl flex-col gap-4">
//                   <h1 className="text-3xl font-extrabold leading-tight tracking-tighter text-white md:text-5xl">
//                     Selamat Datang di Sekolah Cerdas
//                   </h1>
//                   <p className="text-sm font-normal leading-relaxed text-slate-200 md:text-lg">
//                     Membangun Generasi Unggul Melalui Pendidikan Berkualitas dan
//                     Lingkungan Belajar yang Inspiratif.
//                   </p>
//                 </div>
//                 <button className="mt-4 flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#ea2a33] px-6 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-[#c8222a]">
//                   <span className="truncate">Jelajahi Lebih Lanjut</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//
//           {/* About Section */}
//           <div className="px-6 py-12 md:px-24 md:py-20">
//             <div className="mx-auto max-w-5xl">
//               <div className="mb-12 text-center">
//                 <h2 className="text-3xl font-bold leading-tight tracking-tighter text-slate-800 md:text-4xl">
//                   Tentang Sekolah Kami
//                 </h2>
//                 <p className="mx-auto mt-4 max-w-3xl text-sm font-normal leading-relaxed text-slate-600 md:text-lg">
//                   Sekolah Cerdas adalah lembaga pendidikan yang berkomitmen
//                   untuk memberikan pendidikan berkualitas tinggi kepada siswa
//                   dari berbagai latar belakang. Kami percaya bahwa setiap siswa
//                   memiliki potensi untuk mencapai kesuksesan, dan kami
//                   berdedikasi untuk membantu mereka mencapai tujuan mereka.
//                 </p>
//               </div>
//               <div className="flex flex-col items-center justify-center gap-8 rounded-lg md:flex-row md:gap-12">
//                 <div
//                   className="aspect-[4/5] w-full max-w-md flex-1 rounded-xl bg-cover bg-center bg-no-repeat shadow-lg"
//                   style={{
//                     backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHmMcFjPv4Eh54-4xGHehriImlL4tqoWQk9f_dhXVsfDLtKnO1dT5hoCHIyOrw_kjFV2vGFywWyWAwgkbH847ngUj738D95ESniUgvNuvCtWJBvRnCWLdltgTGc98xzh9jzIL_OSeQM6Yrgq64oRCVcO4DMOA3vlNeEKvHfIc7j4spjpI2RFo25GcozReW3qfnqSVTZ01zCiUhYYS0KL-IevFK1CHtKvS1NvE2ysA22Yz6UB6I3eiURZOpGF0LtKz8r3BccjPAca7Y")`,
//                   }}
//                 ></div>
//                 <div className="flex flex-1 flex-col gap-4">
//                   <h3 className="text-2xl font-bold leading-tight tracking-tighter text-slate-800 md:text-3xl">
//                     Sambutan Kepala Sekolah
//                   </h3>
//                   <p className="text-base font-semibold leading-relaxed text-slate-500 md:text-lg">
//                     Bapak Ahmad
//                   </p>
//                   <p className="text-sm font-normal leading-loose text-slate-600 md:text-base">
//                     &quot;Selamat datang di Sekolah Cerdas! Kami sangat senang
//                     menyambut Anda di komunitas kami yang dinamis dan
//                     bersemangat. Di Sekolah Cerdas, kami percaya pada kekuatan
//                     pendidikan untuk mengubah kehidupan dan membentuk masa depan
//                     yang lebih baik. Kami berkomitmen untuk menciptakan
//                     lingkungan belajar yang inklusif, menantang, dan mendukung,
//                     di mana setiap siswa dapat berkembang secara akademis,
//                     sosial, dan emosional.&quot;
//                   </p>
//                 </div>
//               </div>
//
//               {/* Activities Section */}
//               <div className="mt-12 text-center md:mt-20">
//                 <h2 className="text-3xl font-bold leading-tight tracking-tighter text-slate-800 md:text-4xl">
//                   Kegiatan Sekolah
//                 </h2>
//                 <p className="mx-auto mt-4 max-w-3xl text-sm font-normal leading-relaxed text-slate-600 md:text-lg">
//                   Lihatlah berbagai kegiatan menarik yang kami selenggarakan
//                   untuk mengembangkan bakat dan minat siswa di luar kelas.
//                 </p>
//               </div>
//               <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
//                 {activityData.map((activity) => (
//                   <div
//                     key={activity.name}
//                     className="group flex flex-col gap-4"
//                   >
//                     <div
//                       className="aspect-square w-full transform overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat shadow-md transition-transform duration-300 group-hover:scale-105"
//                       style={{ backgroundImage: `url("${activity.image}")` }}
//                     ></div>
//                     <p className="text-center text-lg font-semibold leading-normal text-slate-800 md:text-xl">
//                       {activity.name}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </main>
//
//         {/* Footer */}
//         <footer className="bg-slate-800 text-white">
//           <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
//             <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
//               <div className="flex items-center gap-3">
//                 <SekolahCerdasLogo />
//                 <h2 className="text-xl font-bold text-white">Sekolah Cerdas</h2>
//               </div>
//               <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
//                 <Link
//                   href="#"
//                   className="text-sm font-normal leading-normal text-slate-400 transition-colors hover:text-white md:text-base"
//                 >
//                   Kebijakan Privasi
//                 </Link>
//                 <Link
//                   href="#"
//                   className="text-sm font-normal leading-normal text-slate-400 transition-colors hover:text-white md:text-base"
//                 >
//                   Syarat dan Ketentuan
//                 </Link>
//               </div>
//               <div className="flex justify-center gap-4">
//                 <IconContext.Provider value={{ size: "24px" }}>
//                   {socialLinks.map((social) => (
//                     <Link
//                       key={social.icon.displayName}
//                       href={social.href}
//                       className="text-slate-400 transition-colors hover:text-white"
//                       aria-label={social.icon.displayName}
//                     >
//                       <social.icon />
//                     </Link>
//                   ))}
//                 </IconContext.Provider>
//               </div>
//             </div>
//             <div className="mt-8 border-t border-slate-700 pt-8 text-center">
//               <p className="text-sm font-normal leading-normal text-slate-400 md:text-base">
//                 © 2023 Sekolah Cerdas. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };
//
// export default SekolahCerdas;
