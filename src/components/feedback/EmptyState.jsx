function EmptyState({ message }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 text-center text-[var(--text-secondary)]">
      {message}
    </div>
  );
}

export default EmptyState;