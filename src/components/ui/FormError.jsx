function FormError({ message }) {
  if (!message) return null;

  return (
    <p className="mt-2 text-right text-sm text-red-500">
      {message}
    </p>
  );
}

export default FormError;