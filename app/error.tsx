export default function Error({ error }: { error: Error }) {
  return <p style={{ padding: '2rem', color: 'red' }}>Error: {error.message}</p>
}
