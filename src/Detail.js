import { hover } from '@testing-library/user-event/dist/hover';
import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Detail = (props) => {
    const history = useHistory();
    const url = useParams();
    const [rate, setRate] = React.useState(0);

    return (
        <>
            <div className='detailbox'>
                <h3 style={{ textAlign: "center" }}>
                    <span className='detailweek' style={{ background: 'purple' }}>
                        {url.w}요일
                    </span>
                    평점 남기기
                </h3>

                <div className='weekbox'>

                    {Array.from({ length: 5 }, (item, idx) => {
                        return (
                            <div className='circle'
                                onClick={() => {
                                    setRate(idx + 1);
                                }}
                                onMouseOver={() => {
                                    setRate(idx + 1);
                                }}
                                style={{
                                    backgroundColor: rate < idx + 1 ? "#ddd" : "cornflowerblue",
                                }}
                            ></div>
                        );
                    })}
                </div>

                <button className="btn10"
                    onClick={() => {
                        history.push('/');
                    }}
                >
                    평점 남기기
                </button>
            </div>
        </>
    );
};

export default Detail;
