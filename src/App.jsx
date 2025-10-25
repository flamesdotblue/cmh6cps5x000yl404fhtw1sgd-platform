import { useState } from 'react';
import { Rocket, User, LogIn } from 'lucide-react';
import Hero3D from './components/Hero3D';
import AuthTabs from './components/AuthTabs';
import EventFinder from './components/EventFinder';
import ConductorForm from './components/ConductorForm';

function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">Akathon Hub</h1>
              <p className="text-xs text-slate-400">Find and host akathons near you</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAuth(true)}
              className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm hover:bg-slate-800"
            >
              <LogIn className="h-4 w-4" />
              Sign in / Sign up
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative">
          <Hero3D />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />
          <div className="mx-auto max-w-7xl px-4 relative -mt-40 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <EventFinder />
              </div>
              <div className="lg:col-span-1">
                <ConductorForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-950/70" onClick={() => setShowAuth(false)} />
          <div className="relative w-full max-w-2xl mx-4 rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-slate-300" />
                <span className="font-medium">Sign in / Sign up</span>
              </div>
              <button
                onClick={() => setShowAuth(false)}
                className="rounded-md text-slate-300 hover:text-white focus:outline-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <AuthTabs />
            </div>
          </div>
        </div>
      )}

      <footer className="mt-16 border-t border-slate-800 py-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Akathon Hub. Built for students and conductors.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-slate-200">Privacy</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-slate-200">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
