export default function Badge({ variant = 'green', children }) {
  const styles = {
    green: 'bg-accent-500 text-white',
    orange: 'bg-primary-500 text-white',
    red: 'bg-red-500 text-white',
    yellow: 'bg-secondary-500 text-white',
  }
  return <span className={`badge ${styles[variant]}`}>{children}</span>
}
