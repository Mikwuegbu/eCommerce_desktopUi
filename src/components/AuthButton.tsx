import { authButton } from "../types/authTypes";

//authentication Button component
const AuthButton = ({
  displayText,
  className,
  children,
  btnClick,
  type,
}: authButton) => {
  return (
    <>
      <button className={className} onClick={btnClick} type={type}>
        {children}
        {displayText}
      </button>
    </>
  );
};

export default AuthButton;
