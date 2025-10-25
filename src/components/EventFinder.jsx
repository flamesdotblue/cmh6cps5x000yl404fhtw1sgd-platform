import { useMemo, useState, useEffect } from 'react';
import { MapPin, Globe, Search } from 'lucide-react';

const MOCK_EVENTS = [
  { id: 1, title: 'Campus Code Sprint', mode: 'offline', city: 'San Francisco', country: 'USA', date: '2025-11-05', onlineLink: '', distanceKm: 3 },
  { id: 2, title: 'Global Web3 Akathon', mode: 'online', city: '', country: 'Global', date: '2025-12-10', onlineLink: 'https://meet.example.com/akathon', distanceKm: null },
  { id: 3, title: 'AI Builders Night', mode: 'offline', city: 'Bengaluru', country: 'India', date: '2025-11-20', onlineLink: '', distanceKm: 8 },
  { id: 4, title: 'Open Source Weekend', mode: 'hybrid', city: 'Berlin', country: 'Germany', date: '2025-11-30', onlineLink: 'https://events.example.com/osw', distanceKm: 15 },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-xs text-slate-300">
      {children}
    </span>
  );
}

function EventCard({ ev }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:bg-slate-900 transition">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-base font-semibold text-slate-100">{ev.title}</h4>
        <Badge>{ev.mode.toUpperCase()}</Badge>
      </div>
      <div className="mt-2 text-sm text-slate-300 flex flex-wrap items-center gap-3">
        {ev.mode !== 'online' && (
          <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {ev.city || 'Unknown'}, {ev.country}</span>
        )}
        {ev.mode !== 'offline' && (
          <span className="inline-flex items-center gap-1"><Globe className="h-4 w-4" /> Joinable online</span>
        )}
        <span>• {new Date(ev.date).toLocaleDateString()}</span>
        {ev.distanceKm != null && <span>• ~{ev.distanceKm} km away</span>}
      </div>
      {ev.onlineLink && (
        <a href={ev.onlineLink} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-cyan-300 hover:underline">
          Event details
        </a>
      )}
    </div>
  );
}

function EventFinder() {
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('all');
  const [nearby, setNearby] = useState(false);
  const [city, setCity] = useState('');

  useEffect(() => {
    if (!nearby) return;
    // Demo geolocation to set a sample city; in real app use navigator.geolocation
    setCity('Your Area');
  }, [nearby]);

  const results = useMemo(() => {
    return MOCK_EVENTS.filter((e) => {
      const matchesQuery = e.title.toLowerCase().includes(query.toLowerCase());
      const matchesMode = mode === 'all' || e.mode === mode || (mode === 'hybrid' && e.mode === 'hybrid');
      const matchesCity = city ? (e.city?.toLowerCase().includes(city.toLowerCase()) || e.country?.toLowerCase().includes(city.toLowerCase())) : true;
      return matchesQuery && matchesMode && matchesCity;
    });
  }, [query, mode, city]);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Find Akathons</h3>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          <div className="md:col-span-3">
            <label className="block text-sm">
              <span className="text-slate-300">Search</span>
              <div className="relative mt-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Keywords, e.g. AI, Web3, mobile"
                  className="w-full rounded-md border border-slate-700 bg-slate-900 pl-9 pr-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                />
              </div>
            </label>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm">
              <span className="text-slate-300">Mode</span>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
              >
                <option value="all">All</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </label>
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm">
              <span className="text-slate-300">Nearby</span>
              <button
                onClick={() => setNearby((v) => !v)}
                className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${nearby ? 'border-cyan-500 bg-cyan-500/10 text-cyan-200' : 'border-slate-700 bg-slate-900 text-slate-200'} hover:bg-slate-800`}
              >
                {nearby ? 'Using location' : 'Use location'}
              </button>
            </label>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm">
              <span className="text-slate-300">City or Country</span>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Bengaluru, USA"
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
              />
            </label>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.length === 0 && (
            <div className="col-span-full text-slate-400 text-sm">No akathons match your filters.</div>
          )}
          {results.map((ev) => (
            <EventCard key={ev.id} ev={ev} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventFinder;
