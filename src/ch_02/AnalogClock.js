import { useEffect, useState } from "react";
import "./AnalogClock.css";

// AnalogClock 함수 컴포넌트
const AnalogClock = () => {
  // date 이름의 state 변수 선언, new Date()를 사용하여 초기값을 현재 날짜와 시각으로 선언
  const [date, setDate] = useState(new Date());

  // date가 업데이트 되었을 때 (34행의 [date] : 실행조건을 의미) useEffect 함수 실행
  useEffect(() => {
    // timerId 이름의 변수에 1초마다 date 변수의 정보(현재 날짜와 시각)를 갱신
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // get함수를 사용하여 시, 분, 초를 반환 후 time 변수에 저장
    const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const [h, m, s] = time;

    // 시, 분, 초의 바늘이 각각 몇 도씩 기울어 표현할지 계산
    // 시계에 12개의 숫자를 표시하기 때문에 12로 나눔
    const degHour = h * (360 / 12) + m * (360 / 12 / 60);
    const degMin = m * (360 / 60) + s * (360 / 60 / 60);
    const degSec = s * (360 / 60);

    // 계산한 각도를 사용자 정의 속성을 이용하여 css에 반영
    // ex. degHour가 30도(30deg)인 경우 시침은 숫자 1을 가리킴
    // document.documentElement는 document의 루트 요소인 Element를 리턴 -> <html />
    // :root 선택자로 루트 요소에 css를 작성했기 때문에 루트 요소를 선택 가능
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty("--degHour", `${degHour}deg`);
    rootStyle.setProperty("--degMin", `${degMin}deg`);
    rootStyle.setProperty("--degSec", `${degSec}deg`);

    // useEffect 함수가 종료될 때 clearInterval 함수 실행
    return () => clearInterval(timerId);
  }, [date]);

  return (
    // *** props를 이용해서 공통 컴포넌트로 뺄 수 있음
    <div className="clock">
      <div className="h-hand"></div>
      <div className="m-hand"></div>
      <div className="s-hand"></div>
    </div>
  );
};

export default AnalogClock;