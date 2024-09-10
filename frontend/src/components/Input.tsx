export function Input() {
  const styles = `
  bg-transparent py-2 px-4 border w-full mb-10
  focus:outline-offset-8 focus:outline-4 focus:outline-red-500
  disabled:bg-gray-200 disabled:cursor-not-allowed
`;

  return <input type="text" className={styles} />;
}
