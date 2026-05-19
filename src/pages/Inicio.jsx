import React from 'react';
import { Search, Map, UserPlus, GraduationCap, Megaphone, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header section */}
      <div className="relative bg-[#002f5b] text-white pt-10 pb-24 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex justify-between items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Hola,</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Bienvenido a Dattapro</h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-md leading-relaxed">
              Conectando talento, investigación e innovación
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative -mt-12 z-20">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6 border-b-4 border-[#002f5b]">
            <div className="p-4 bg-blue-50 rounded-full">
               <GraduationCap className="w-10 h-10 text-[#002f5b]" />
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800">4,500+</div>
              <div className="text-sm font-medium text-slate-500">Perfiles Registrados</div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6 border-b-4 border-yellow-400">
            <div className="p-4 bg-yellow-50 rounded-full">
               <Megaphone className="w-10 h-10 text-yellow-500" />
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800">250+</div>
              <div className="text-sm font-medium text-slate-500">Convocatorias Abiertas</div>
            </div>
          </div>
        </div>

        {/* Acceso rápido */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-[#002f5b] mb-4">Acceso rápido</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <Link to="/network" className="bg-[#0f4d8a] hover:bg-[#0c4073] transition-all rounded-[1.25rem] px-4 flex items-center shadow-sm h-28 hover:shadow-md group">
              <div className="w-1/2 flex justify-center pr-2">
                <Search className="w-16 h-16 opacity-90 group-hover:scale-105 transition-transform" strokeWidth={1.2} />
              </div>
              <div className="w-1/2 text-left pl-2">
                <span className="font-medium text-[1.1rem] leading-tight block">Buscar Talento</span>
              </div>
            </Link>
            <Link to="/convocatorias" className="bg-[#2a9497] hover:bg-[#247e80] transition-all rounded-[1.25rem] px-4 flex items-center shadow-sm h-28 hover:shadow-md group">
              <div className="w-1/2 flex justify-center pr-2">
                <Map className="w-16 h-16 opacity-90 group-hover:scale-105 transition-transform" strokeWidth={1.2} />
              </div>
              <div className="w-1/2 text-left pl-2">
                <span className="font-medium text-[1.1rem] leading-tight block">Explorar<br/>Convocatorias</span>
              </div>
            </Link>
            <Link to="/perfil" className="bg-[#2ea4ae] hover:bg-[#268a92] transition-all rounded-[1.25rem] px-4 flex items-center shadow-sm h-28 hover:shadow-md group">
              <div className="w-1/2 flex justify-center pr-2">
                <UserPlus className="w-16 h-16 opacity-90 group-hover:scale-105 transition-transform" strokeWidth={1.2} />
              </div>
              <div className="w-1/2 text-left pl-2">
                <span className="font-medium text-[1.1rem] leading-tight block">Crear Perfil</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Últimos Perfiles & Nuevas Convocatorias */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-[#002f5b] mb-4">Últimos Perfiles Registrados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              <img src="https://i.pravatar.cc/150?img=47" alt="Dra. Elena Ruiz" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-slate-800">Dra. Elena Ruiz</h4>
                <p className="text-sm text-slate-500">Biotecnología, IA</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              <img src="https://i.pravatar.cc/150?img=53" alt="Dr. Carlos Gómez" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-slate-800">Dr. Carlos Gómez</h4>
                <p className="text-sm text-slate-500">Biotecnología, IA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-bold text-[#002f5b] mb-4">Nuevas Convocatorias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 rounded-lg text-[#002f5b]">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Fondo de Innovación Académica</h4>
                <p className="text-sm text-slate-500 mt-1">25 de mayo de 2026</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 rounded-lg text-[#002f5b]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Becas Doctorado</h4>
                <p className="text-sm text-slate-500 mt-1">10 de mayo de 2026</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Inicio;
