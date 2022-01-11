import React, { useState } from 'react';

function Main() {

  /**
   * useState
   */
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [restTime, setRestTime] = useState('');
  const [entryNum, setEntryNum] = useState('');

  const [resultLiveTime, setResultLiveTime] = useState('');
  const [resultTime, setResultTime] = useState('');
  

  /**
   * onChange
   */
   const handleChangeStartTime = (e) => {
    setStartTime(() => e.target.value);
  }

  const handleChangeEndTime = (e) => {
    setEndTime(() => e.target.value);
  }

  const handleChangeRestTime = (e) => {
    setRestTime(() => e.target.value);
  }

  const handleChangeEntryNum = (e) => {
    setEntryNum(() => e.target.value);
  }

  /**
   * function
   */
  function calc(){
    // 開始時間hh
    const from_hour = Number(startTime.substring(0, 2));
    // 開始時間mm
    const from_minute = Number(startTime.substring(2, 4));

    // 終了時間hh
    const to_hour = Number(endTime.substring(0, 2));
    // 終了時間mm
    const to_minute = Number(endTime.substring(2, 4));

    // 開始時間秒換算
    const from_hour_ss = from_hour * 3600;
    const from_minute_ss = from_minute * 60;
    const from_ss = from_hour_ss + from_minute_ss;

    // 終了時間秒換算
    const to_hour_ss = to_hour * 3600;
    const to_minute_ss = to_minute * 60;
    const to_ss = to_hour_ss + to_minute_ss;

    setResultLiveTime((to_ss - from_ss) / 60);
    setResultTime((resultLiveTime / entryNum) - restTime * (entryNum - 1));
  }

  return (
    <React.Fragment>
      <h1>ざっくり計算</h1>
      <p>ちゃんと手でも計算して</p>
      <p>へんな結果になるときはもう一度計算ボタンおして（解決する時がある）</p>
      <table>
        <tbody>
          <tr>
            <td>開始時間を入力してください<br />（例 18時30分 → 1830）</td>
            <td><input type="text" value={startTime} onChange={handleChangeStartTime}/></td>
          </tr>

          <tr>
            <td>終了時間を入力してください<br />（例 21時45分 → 2145）</td>
            <td><input type="text" value={endTime} onChange={handleChangeEndTime}/></td>
          </tr>

          <tr>
            <td>グループ毎の休憩時間を入力してください<br />（例 5分 → 5）</td>
            <td><input type="text" value={restTime} onChange={handleChangeRestTime}/></td>
          </tr>

          <tr>
            <td>参加グループ数を入力してください<br />（例 6人 → 6）</td>
            <td><input type="number" value={entryNum} onChange={handleChangeEntryNum}/></td>
          </tr>
        </tbody>
      </table>

      <div>
        <button onClick={calc}>計算</button>
        <table>
          <tbody>
            <tr>
              <td>開催時間</td>
              <td>{resultLiveTime}分</td>
            </tr>
            <tr>
              <td>グループ毎の開催時間</td>
              <td>{resultTime}分</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Main;
