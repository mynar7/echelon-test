function ErrorMessage() {
  return (
    <div className="center-screen">
      <p>Error retrieving data!</p>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
}

export default ErrorMessage;
