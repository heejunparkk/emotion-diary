const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
//className은 문자로 전달해야하기 때문에 join메서드를 활용해서 ''띄어쓰기를 세퍼레이터로 해서 합쳐주기로한다.

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
