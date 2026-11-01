function Input({ label, type = "text", placeholder, ...props }) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-[var(--text-secondary)]"
      >
        {label}
      </label>

      <input
        id={props.name}
        type={type}
        placeholder={placeholder}
        {...props}
        className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-3 text-right text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
      />
    </div>
  );
}

export default Input;
