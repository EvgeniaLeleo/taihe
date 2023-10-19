export const Arrow = ({ className, direction = 'left' }) => {
  if (direction === 'left') {
    return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="7" height="12" fill="none">
        <path stroke="#161616" stroke-width="1.3" d="M6.5 12 1 7l5.5-5" />
      </svg>
    );
  }

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="7" height="12" fill="none">
      <path stroke="#161616" stroke-width="1.3" d="M2 1L8.5 7L2 12" />
    </svg>
  );
};
