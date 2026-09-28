export default function CategoriaPage({ params }: { params: { slug: string } }) {
  return <h1>Categoría: {params.slug}</h1>
}
