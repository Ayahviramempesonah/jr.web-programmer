"use server";

import { neon } from "@neondatabase/serverless";

export async function CreateContacts(formData: FormData) {
  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  await sql`
        INSERT INTO contacts (name, email, message)
        VALUES (${name}, ${email}, ${message})
      `;
}

// "use server";
//
// import { neon } from "@neondatabase/serverless";
// import { z } from "zod";
// import { revalidatePath } from "next/cache";
//
// // 1. Definisikan skema validasi dengan Zod
// // Ini adalah "aturan" untuk data yang boleh
//
// const ContactSchema = z.object({
//   name: z.string().min(3, { message: "Nama harus diisi, minimal 3 karakter." }),
//   email: z
//     .string()
//     .email({ message: "Format email yang Anda masukkan tidak valid." }),
//   message: z
//     .string()
//     .min(10, { message: "Pesan harus diisi, minimal 10 karakter." }),
// });
//
// export type State = {
//   errors?: {
//     name?: string[];
//     email?: string[];
//     message?: string[];
//   };
//   message?: string | null;
// };
//
// // 2. Ubah fungsi untuk menerima prevState dan
// // mengembalikan State
// export async function CreateContacts(prevState: State, formData: FormData) {
//   // 3. Validasi input dari formData menggunakan
//   const validatedFields = ContactSchema.safeParse({
//     name: formData.get("name") as string,
//     email: formData.get("email") as string,
//     message: formData.get("message") as string,
//   });
//
//   // Kode tidak akan melanjutkan ke database.
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Gagal mengirim pesan. Mohon periksa kembali isian form Anda.",
//     };
//   }
//
//   const { name, email, message } = validatedFields.data;
//
//   // 6. Lanjutkan proses ke database di dalam  blok try...catch
//   try {
//     if (!process.env.DATABASE_URL) {
//       throw new Error("DATABASE_URL environment variable is not set.");
//     }
//     const sql = neon(process.env.DATABASE_URL);
//
//     await sql`
//          VALUES (${name}, ${email}, ${message})
//         `;
//
//     // Bersihkan cache untuk halaman kontak agar data baru bisa muncul (jika ada)
//     revalidatePath("/contact");
//
//     // Kembalikan pesan sukses
//     return { message: "Pesan Anda telah berhasil dikirim!" };
//   } catch (error) {
//     console.error("Database Error:", error);
//     // Kembalikan pesan error jika terjadi
//     return { message: "Terjadi kesalahan pada server. Gagal mengirim pesan." };
//   }
// }
