import { useState } from 'react';

function Input({ label, type = 'text', placeholder, ...props }) {
  return (
    <label className="block text-sm">
      <span className="text-slate-300">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
        {...props}
      />
    </label>
  );
}

function AuthTabs() {
  const [role, setRole] = useState('student');
  const [mode, setMode] = useState('signin');

  const title = `${mode === 'signin' ? 'Sign in' : 'Sign up'} as ${role === 'student' ? 'Student' : 'Conductor'}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // Replace with real auth integration
    console.log('Auth submit', { role, mode, data });
    alert(`${title} successful (demo)`);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex rounded-lg border border-slate-700 p-1 bg-slate-900">
          <button
            onClick={() => setRole('student')}
            className={`px-3 py-1.5 text-sm rounded-md ${role === 'student' ? 'bg-cyan-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            Student
          </button>
          <button
            onClick={() => setRole('conductor')}
            className={`px-3 py-1.5 text-sm rounded-md ${role === 'conductor' ? 'bg-cyan-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            Conductor
          </button>
        </div>
        <div className="inline-flex rounded-lg border border-slate-700 p-1 bg-slate-900">
          <button
            onClick={() => setMode('signin')}
            className={`px-3 py-1.5 text-sm rounded-md ${mode === 'signin' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            Sign in
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`px-3 py-1.5 text-sm rounded-md ${mode === 'signup' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
          >
            Sign up
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="text-lg font-medium mb-3">{title}</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'signup' && (
            <Input name="name" label="Full name" placeholder="Alex Smith" />
          )}
          <Input name="email" type="email" label="Email" placeholder="you@example.com" />
          <Input name="password" type="password" label="Password" placeholder="••••••••" />
          {mode === 'signup' && role === 'conductor' && (
            <Input name="org" label="Organization / Team" placeholder="Acme Labs" />
          )}
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2.5 text-sm font-medium text-white shadow hover:opacity-95"
          >
            {mode === 'signin' ? 'Continue' : 'Create account'}
          </button>
          <p className="text-xs text-slate-400">
            By continuing you agree to our Terms and acknowledge our Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
}

export default AuthTabs;
