interface ChildProps {
  color: String;
  onclick: () => void; //return type is void
}

export const Child = ({ color, onclick }: ChildProps) => {
  return (
    <div>
      <h1>{color} lives matter!</h1>
      <button onClick={onclick}>Click me</button>
    </div>
  );
};

export const ChildFC: React.FC<ChildProps> = ({ color, onclick, children }) => {
  return (
    <div>
      <h1>{color} lives matter!</h1>
      {children}
      <button onClick={onclick}>Click me</button>
    </div>
  );
};

// FC - function component -> displays properties of react components like displayname, contexttypes, etc.

// ChildFC.displayName;
