import Achievement from '@/modules/components/achievement'
import Percentage from '@/modules/components/percentage'
import Layout from '@/modules/layouts/layout'
import React from 'react'
import Image from 'next/image'
export default function Progreso() {
  return (
    <Layout>
      <section className='mt-12'>
        <article className='flex items-center gap-5 mb-10'>
          <div className='bg-gradient-to-br from-amber-50 to-cyan-300 rounded-xl p-4 relative flex items-center ml-3'>
            <span className='border-r border-b-cyan-400 w-[1px] h-10 absolute -bottom-10'>

            </span>
          </div>
          <h2 className='text-2xl text-cyan-50 font-semibold'>Mira tu progreso </h2>
         <article className='flex justify-between items-center gap-5 mb-10'>
  

  
</article>
        </article>
        <Achievement 
  title="Iniciaste "
  date="2019"
  description="Completaste tu carrera con éxito. ¡Felicidades!"
/>

<Achievement 
  title="Curso de React Avanzado"
  date="2024"
  description="Aprendiste componentes, hooks y routing en profundidad."
  isLast
/>

      </section>
     <section className='text-right'>
      <div className="w-[150px] h-[200px] rounded-xl overflow-hidden">
   <Image
  src="https://res.cloudinary.com/dpnfdcar1/image/upload/v1747688001/bg_f8f8f8-flat_750x_075_f-pad_750x1000_f8f8f8_ugea9t.jpg"
  alt="Descripción"
  width={600}
  height={400}
/></div>
  </section> {/* Imagen a la derecha */}
  

      <section className='mt-10'>
        <h2 className='text-2xl text-cyan-300 font-semibold'>Ejercicio</h2>
        <article className='bg-gradient-to-br from-cyan-900 to-neutral-900 rounded-xl p-4 flex flex-col mt-5'>
       <Percentage 
  label="Estiramiento" 
  percentage={90} 
/>



<Percentage 
  label="Pesas" 
  percentage={65} 
  fromColor="from-blue-400" 
  toColor="to-blue-700" 
/>

<Percentage 
  label="Cardio" 
  percentage={90} 
  fromColor="from-green-300" 
  toColor="to-green-600" 
/>
        </article>
      </section>

      <section className='mt-10'>
        <h2 className='text-2xl text-cyan-300 font-semibold'>Alimentación</h2>
        <article className='bg-gradient-to-br from-cyan-900 to-neutral-900 rounded-xl p-4 flex flex-col mt-5'>
        <Percentage 
  label="Proteinas" 
  percentage={80} 
/>

<Percentage 
  label="Carbohidratos" 
  percentage={65} 
  fromColor="from-blue-400" 
  toColor="to-blue-700" 
/>

<Percentage 
  label="Calorias" 
  percentage={90} 
  fromColor="from-green-300" 
  toColor="to-green-600" 
/>
        </article>
      </section>

    </Layout>
  )
}
