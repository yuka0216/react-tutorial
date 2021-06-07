import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const Tutorial = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //第二引数に空配列を設定するとそのコンポーネントで最初の表示一回だけ通したいような処理を実行出来る
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        //左側がfalseの場合に右側の処理を行う
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //左側がtrueの場合右側の処理を行う
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //第二引数に関心のある変数を入れるとその変数のstateが変わった時だけuseEffect内の処理が動く
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(ノД`)・゜・。</p>}
    </>
  );
};

export default Tutorial;
