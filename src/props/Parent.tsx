import { Child, ChildFC } from "./Child";

const Parent = () => {
  return (
    <ChildFC color="Black" onclick={() => console.log("Clicked")}>
      fadsfajhvjhvl
    </ChildFC>
  );
};

export default Parent;
