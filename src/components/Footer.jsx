import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-20 border-t border-[#484849]/15 bg-[#0e0e0f]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
                <p className="font-mono text-[10px] tracking-tight uppercase text-[#00F0FF]">© 2026 VIJAY LABX // ENCRYPTED INTERFACE</p>
                <div className="flex gap-4">
                    <span className="w-1 h-1 bg-primary-container rounded-full opacity-50"></span>
                    <span className="w-1 h-1 bg-primary-container rounded-full opacity-50"></span>
                    <span className="w-1 h-1 bg-primary-container rounded-full opacity-50"></span>
                </div>
            </div>
            <nav className="flex gap-8">
                <a className="font-mono text-[10px] tracking-tight uppercase text-slate-600 hover:text-[#00F0FF] transition-all" href="https://github.com/vijaylabx">GitHub</a>
                <a className="font-mono text-[10px] tracking-tight uppercase text-slate-600 hover:text-[#00F0FF] transition-all" href="https://www.linkedin.com/in/vijay-kumar-334911270">LinkedIn</a>
                <a className="font-mono text-[10px] tracking-tight uppercase text-slate-600 hover:text-[#00F0FF] transition-all" href="https://www.reddit.com/user/vijaylabx/">Reddit</a>
                <a className="font-mono text-[10px] tracking-tight uppercase text-slate-600 hover:text-[#00F0FF] transition-all" href="#">Privacy</a>
            </nav>
            <div className="text-right hidden md:block">
                <p className="font-mono text-[10px] text-outline tracking-widest uppercase">Encryption Status: AES-256</p>
            </div>
        </div>
    </footer>
  );
}
