import React from "react";
import './App.css';
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const history = useHistory();
    const getRandom = (min, max) =>
        Math.floor(Math.random() * (max - min) + min);
    const 요일 = ['월', '화', '수', '목', '금', '토', '일']
    // const score = [3, 2, 4, 5, 3, 4, 1];
    const 요일점수 = 요일.map((week, idx) => {
        return {
            day: 요일[idx],
            rate: getRandom(1, 5),
        };
    });




    return (
        <>
            <div className='box'>
                <h2 style={{ textAlign: "center" }}>내 일주일은?</h2>

                {요일점수.map((d, i) => {
                    return (
                        <div className='weekbox'>
                            <p style={{ margin: "0.5px" }}>
                                {요일[i]}
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
                                    history.push(`/detail/${요일[i]}`);
                                }}
                            ></div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Main;
