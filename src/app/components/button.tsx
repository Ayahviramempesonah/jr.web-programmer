import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-500 text-white 
      py-2 px-4 rounded hover:bg-blue-600 
      disabled:bg-gray-400 
      disabled:cursor-not-allowed"
    >
      {pending ? "Mengirim..." : "kirim"}
    </button>
  );
}
