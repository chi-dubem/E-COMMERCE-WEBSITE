const Star_jsx = ({ color }) => {
  return (
    <div>
      <span className="inline-block" style={{ color: color }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M10.788 3.21c.44-.949 1.761-.949 2.201 0l1.458 3.125a1.5 1.5 0 0 0 1.259.851l3.398.491c1.037.15 1.458 1.411.706 2.155l-2.463 2.398a1.5 1.5 0 0 0-.432 1.332l.582 3.389c.176 1.025-.918 1.815-1.85 1.34L12 18.331l-3.036 1.597c-.932.484-2.026-.315-1.85-1.34l.582-3.389a1.5 1.5 0 0 0-.432-1.332L3.52 9.832c-.752-.744-.331-2.005.706-2.155l3.398-.491a1.5 1.5 0 0 0 1.259-.851l1.458-3.125Z" />
        </svg>
      </span>
    </div>
  );
};

export default Star_jsx
