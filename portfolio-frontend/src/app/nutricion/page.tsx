import Layout from '@/modules/layouts/layout'
import Project from '@/modules/project/components/project.components'
import React from 'react'

export default function Nutrición() {
  return (
    <Layout>
      <h6 className='text-cyan-300 text-6xl text-center'>Nutrición</h6>
      <p className='text-amber-50 font-semibold text-2xl text-center'>
        Adaptamos tu plan de alimentación según tus necesidades
      </p>
      <Project />
    </Layout>
  )
}