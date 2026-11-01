function Textarea({ label, placeholder, ...props }) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-[var(--text-secondary)]"
      >
        {label}
      </label>

      <textarea
        id={props.name}
        className="mt-2 w-full min-h-32 resize-y rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-right text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default Textarea;