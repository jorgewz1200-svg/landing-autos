import { supabase } from '@/lib/supabaseClient'

export default async function AutoPage({ params }: { params: { slug: string } }) {
  const { data: auto, error } = await supabase
    .from('autos')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (error || !auto) {
    return <p>Auto no encontrado</p>
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{auto.marca} {auto.modelo}</h1>
      <p>Precio: ${auto.precio}</p>
    </div>
  )
}
