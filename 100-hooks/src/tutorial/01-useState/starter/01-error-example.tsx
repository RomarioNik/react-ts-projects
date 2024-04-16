const ErrorExample = () => {
  let count: number = 0;

  const handleClick = (): void => {
    count = count + 1;
    console.log(count);
  };

  return (
    <>
      <h2>useState error example</h2>
      <h3>{count}</h3>
      <button className="btn" type="button" onClick={handleClick}>
        increase
      </button>
    </>
  );
};

export default ErrorExample;
