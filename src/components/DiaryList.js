import { useState } from "react";

const sortOptionList = [
  { value: "lastest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("lastest");

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "lastest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }; //if문으로 정렬된 리스트를 반환해주는 함수

    const copyList = JSON.parse(JSON.stringify(diaryList));
    //깊은복사 해준다. diaryList가 배열인데 Json화 시켜서 문자로 바꿔주고 parse를 실행시키게되면 다시 배열로 복구된다. 그럼 { diaryList }배열을 건드리지 않을수있다.
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
