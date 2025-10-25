import { useState } from 'react';
import { Calendar, UploadCloud } from 'lucide-react';

function ConductorForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Replace with backend call
    await new Promise((r) => setTimeout(r, 800));
    console.log('Create akathon', data);
    setSubmitting(false);
    alert('Akathon submitted (demo).');
    e.currentTarget.reset();
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Host an Akathon</h3>
      <form onSubmit={handleSubmit} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-3">
        <label className="block text-sm">
          <span className="text-slate-300">Title</span>
          <input name="title" required placeholder="e.g. AI Builders Night" className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" />
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="block text-sm">
            <span className="text-slate-300">Mode</span>
            <select name="mode" className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/60">
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className="text-slate-300">Date</span>
            <div className="relative mt-1">
              <Calendar className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input name="date" type="date" required className="w-full rounded-md border border-slate-700 bg-slate-900 pl-9 pr-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" />
            </div>
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="block text-sm">
            <span className="text-slate-300">City</span>
            <input name="city" placeholder="e.g. Berlin" className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" />
          </label>
          <label className="block text-sm">
            <span className="text-slate-300">Country</span>
            <input name="country" placeholder="e.g. Germany" className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" />
          </label>
        </div>
        <label className="block text-sm">
          <span className="text-slate-300">Online link (if any)</span>
          <input name="onlineLink" type="url" placeholder="https://..." className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" />
        </label>
        <label className="block text-sm">
          <span className="text-slate-300">Description</span>
          <textarea name="description" rows={4} placeholder="Brief overview, requirements, prizes, etc." className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" />
        </label>
        <label className="block text-sm">
          <span className="text-slate-300">Cover image</span>
          <div className="mt-1 flex items-center justify-center rounded-md border border-dashed border-slate-700 bg-slate-900 p-6 text-slate-400">
            <div className="text-center">
              <UploadCloud className="mx-auto h-6 w-6" />
              <p className="mt-1 text-xs">Drag & drop or click to upload (demo)</p>
            </div>
          </div>
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2.5 text-sm font-medium text-white shadow hover:opacity-95 disabled:opacity-60"
        >
          {submitting ? 'Submitting…' : 'Publish Akathon'}
        </button>
        <p className="text-xs text-slate-400">Once approved, your akathon will be discoverable in the Event Finder.</p>
      </form>
    </div>
  );
}

export default ConductorForm;
