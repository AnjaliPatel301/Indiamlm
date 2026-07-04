export default function Enquiry() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-center">
          Enquiry Form
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}