const Suggestion = () => {
  return (
    <div className="container">
      <h1>Filter Time Slots</h1>
      <div>
        <button type="button" class="btn btn-primary">
          Time Blocks
        </button>
        <button type="button" class="btn btn-primary">
          Days
        </button>
        <button type="button" class="btn btn-primary">
          Members
        </button>
      </div>
      <div>
        <h3>Suggested Times:</h3>
        <div>{/* suggested time cards */}</div>
      </div>
    </div>
  );
};

export default Suggestion;
