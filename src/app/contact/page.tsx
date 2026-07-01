export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="bg-green-900 text-white text-center py-16">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p>Get Safety Equipment Quote in UAE</p>
      </section>

      <section className="max-w-xl mx-auto py-16 px-6">
        <form className="flex flex-col gap-4">

          <input className="border p-3" placeholder="Name" />
          <input className="border p-3" placeholder="Email" />
          <input className="border p-3" placeholder="Phone" />
          <textarea className="border p-3" placeholder="Requirement"></textarea>

          <button
  type="button"
  onClick={() => {
    const name = (document.querySelector('input[placeholder="Name"]') as HTMLInputElement)?.value;
    const phone = (document.querySelector('input[placeholder="Phone"]') as HTMLInputElement)?.value;
    const email = (document.querySelector('input[placeholder="Email"]') as HTMLInputElement)?.value;
    const msg = (document.querySelector('textarea') as HTMLTextAreaElement)?.value;

    const text = `New Inquiry:%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ARequirement: ${msg}`;

    window.open(`https://wa.me/971561080825?text=${text}`, "_blank");
  }}
  className="bg-orange-500 text-white py-3 rounded"
>
  Send Request
</button>

        </form>
      </section>

    </main>
  );
}