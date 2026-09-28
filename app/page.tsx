import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

export default async function Home() {
  // 1. Consultar todos los autos
  const { data: autos, error } = await supabase.from('autos').select('*')

  // 2. Manejo de errores
  if (error) {
    return <p>Error al cargar autos: {error.message}</p>
  }

  // 3. Mostrar lista de autos
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Venta de Autos</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {autos?.map(auto => (
          <Link key={auto.id} href={`/autos/${auto.slug}`}>
            <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
              <h2>{auto.marca} {auto.modelo}</h2>
              <p>Precio: ${auto.precio}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
