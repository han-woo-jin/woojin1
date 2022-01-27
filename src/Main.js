import React from "react";
import './App.css';
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const history = useHistory();
    const getRandom = (min, max) =>
        Math.floor(Math.random() * (max - min) + min);
    const 요일 = ['일', '월', '화', '수', '목', '금', '토', '일', '월', '화', '수', '목', '금', '토']
    const 오늘요일 = new Date().getDay();

    const 요일점수 = 요일.map((week, idx) => {
        return {
            day: 요일[idx],
            rate: getRandom(-1, 5),
        };
    });




    return (
        <>
            <div className='box'>
                <h2 style={{ textAlign: "center" }}>내 일주일은?</h2>

                {요일점수.map((d, i) => {
                    return (
                        i < 7
                            ?
                            <div className='weekbox'>
                                <p style={{ margin: "0.5px" }}>
                                    {요일[i + 오늘요일]}
                                </p>
                                {Array.from({ length: 5 }, (dd, k) => {
                                    return (
                                        <div className='circle'
                                            key={k}
                                            style={{
                                                backgroundColor: d.rate < k ? "#ddd" : "cornflowerblue",
                                            }}
                                        ></div>
                                    );
                                })}
                                <div className='tri'
                                    onClick={() => {
                                        history.push(`/detail/${요일[i + 오늘요일]}`);
                                    }}
                                ></div>
                            </div>
                            :
                            null
                    );
                })}
            </div>
        </>
    );
};

export default Main;
