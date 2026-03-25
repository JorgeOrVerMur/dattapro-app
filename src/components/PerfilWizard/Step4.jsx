import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step4 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Sección Competencias */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-primary/10 rounded-xl">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Competencias y Sectores</h2>
            <p className="text-sm text-slate-500 font-medium leading-none mt-1">Habilidades clave y áreas de impacto</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wider ml-1">Competencias Técnicas / Transversales</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ej. Análisis de Datos, Liderazgo, Python (Separados por comas)"
                {...register('competencias', { required: 'Las competencias son requeridas' })} 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all font-semibold text-slate-700 placeholder:text-slate-400 shadow-inner"
              />
              {errors.competencias && <span className="text-red-500 text-[11px] font-bold absolute -bottom-5 left-1 uppercase">{errors.competencias.message}</span>}
            </div>
            <p className="text-[11px] text-slate-400 font-medium ml-2 mt-2">Introduce tus habilidades separadas por comas para generar etiquetas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wider ml-1">Sectores de Interés</label>
              <input 
                type="text" 
                placeholder="Ej. Salud, Tecnología, Fintech"
                {...register('sectores', { required: 'Los sectores son requeridos' })} 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all font-semibold text-slate-700 placeholder:text-slate-400 shadow-inner"
              />
              {errors.sectores && <span className="text-red-500 text-[11px] font-bold uppercase block ml-1">{errors.sectores.message}</span>}
            </div>
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wider ml-1">Áreas de Especialidad</label>
              <input 
                type="text" 
                placeholder="Ej. IA, Energías Renovables"
                {...register('intereses', { required: 'Los intereses son requeridos' })} 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all font-semibold text-slate-700 placeholder:text-slate-400 shadow-inner"
              />
              {errors.intereses && <span className="text-red-500 text-[11px] font-bold uppercase block ml-1">{errors.intereses.message}</span>}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Proyección */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-primary/10 rounded-xl">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Proyección y Objetivos</h2>
            <p className="text-sm text-slate-500 font-medium leading-none mt-1">¿Qué buscas lograr en la red?</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wider ml-1">Objetivos en la Red</label>
            <textarea 
              rows="4"
              placeholder="Describe tus propósitos y lo que esperas aportar/obtener de la comunidad..."
              {...register('objetivo', { required: 'El objetivo es requerido' })} 
              className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[2rem] focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400 resize-none leading-relaxed shadow-sm"
            ></textarea>
            {errors.objetivo && <span className="text-red-500 text-[11px] font-bold uppercase block ml-1">{errors.objetivo.message}</span>}
          </div>
          
          <div className="p-6 bg-slate-900 rounded-[2rem] text-white shadow-xl flex items-center justify-between overflow-hidden relative">
            <div className="relative z-10 w-2/3">
              <h4 className="font-bold text-lg mb-1 italic">¡Casi listo!</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">Revisa que toda tu información sea correcta antes de finalizar tu perfil profesional.</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-2xl"></div>
            <div className="bg-primary/20 p-3 rounded-full border border-primary/30">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Step4;
