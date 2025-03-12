interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit';
    className?: string;
  }
  
  export default function Button({ label, onClick, type = 'button', className }: ButtonProps) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-6 py-2 rounded-md text-white bg-teal hover:bg-light-green transition duration-300 ${className}`}
      >
        {label}
      </button>
    );
  }
  