import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';

const Step3 = () => {
  const { register, control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "formaciones"
  });

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Sección Académica */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-primary/10 rounded-xl">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">Trasfondo Académico</h2>
              <p className="text-sm text-slate-500 font-medium leading-none mt-1">Tu formación y conocimientos clave</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => append({ nivel: '', titulo: '' })}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-xl transition-all font-bold text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Agregar formación
          </button>
        </div>

        <div className="space-y-6">
          {fields.map((field, index) => (
            <div key={field.id} className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] relative group animate-in zoom-in-95 duration-300">
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-slate-200 text-slate-400 hover:text-red-500 hover:border-red-200 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all z-10"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1">Nivel de Formación</label>
                  <select
                    {...register(`formaciones.${index}.nivel`, { required: 'El nivel es requerido' })}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none appearance-none transition-all font-semibold text-slate-700 text-sm"
                  >
                    <option value="">Seleccione nivel...</option>
                    <option value="Pregrado">Pregrado / Profesional</option>
                    <option value="Especialización">Especialización</option>
                    <option value="Maestría">Maestría</option>
                    <option value="Doctorado">Doctorado</option>
                    <option value="Postdoctorado">Postdoctorado</option>
                  </select>
                  {errors.formaciones?.[index]?.nivel && <span className="text-red-500 text-[10px] font-bold uppercase block ml-1">{errors.formaciones[index].nivel.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider ml-1">Título Obtenido</label>
                  <input
                    type="text"
                    placeholder="Ej. Ingeniero Multimedia"
                    {...register(`formaciones.${index}.titulo`, { required: 'El título es requerido' })}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-semibold text-slate-700 placeholder:text-slate-300 text-sm"
                  />
                  {errors.formaciones?.[index]?.titulo && <span className="text-red-500 text-[10px] font-bold uppercase block ml-1">{errors.formaciones[index].titulo.message}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 max-w-md">
          <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wider ml-1">Áreas de Conocimiento</label>
          <input
            type="text"
            placeholder="Ej. IA, Ciencia de Datos"
            {...register('areas', { required: 'Las áreas son requeridas' })}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all font-semibold text-slate-700 placeholder:text-slate-400"
          />
          {errors.areas && <span className="text-red-500 text-[11px] font-bold uppercase block ml-1">{errors.areas.message}</span>}
        </div>
      </section>

      {/* Sección Experiencia */}
      <section className="space-y-8">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-primary/10 rounded-xl">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">Experiencia Profesional</h2>
            <p className="text-sm text-slate-500 font-medium leading-none mt-1">Trayectoria y logros destacados</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wider ml-1">Resumen de Experiencia</label>
            <textarea
              rows="4"
              placeholder="Describe brevemente tus años de experiencia y roles principales..."
              {...register('experiencia', { required: 'La experiencia es requerida' })}
              className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[2rem] focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400 resize-none leading-relaxed"
            ></textarea>
            {errors.experiencia && <span className="text-red-500 text-[11px] font-bold uppercase block ml-1">{errors.experiencia.message}</span>}
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-500 uppercase tracking-wider ml-1">Perfil Profesional (Bio)</label>
            <textarea
              rows="4"
              placeholder="Un párrafo introductorio sobre tu enfoque y visión..."
              {...register('perfil', { required: 'El perfil profesional es requerido' })}
              className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[2rem] focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400 resize-none leading-relaxed"
            ></textarea>
            {errors.perfil && <span className="text-red-500 text-[11px] font-bold uppercase block ml-1">{errors.perfil.message}</span>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Step3;
