import {useState} from "react";
import {isEmpty} from "lodash";
import {useForm} from "react-hook-form";

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import {statisticGetData} from "../utils/middleware";

export default function Statistic() {
    const {register, handleSubmit} = useForm();
    const [data, setData] = useState("");
    const [chartsValues, setChartsValues] = useState("");

    const onSubmit = data => {
        statisticGetData(data.code).then(response => {
            setData(response.data)
            !(response.data.message) ? preGeoData(response.data) : null;
        });
    };

    const preGeoData = async (data) => {
        let labels = []
        let values = []
        let colors = []
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        await data.map((items) => {
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`;
            labels.push(items.country);
            values.push(items.total);
            colors.push(`${rgb}`)
        })
        setChartsValues({
            labels,
            datasets: [
                {
                    label: '# of Clicks',
                    data: values,
                    backgroundColor: colors,
                    borderWidth: 1,
                },
            ],
        })
    }
    const pieData = chartsValues;

    return (
        <>
            <div className="col-lg-8 mx-auto p-3 py-md-5">
                <header className="align-items-center pb-3 mb-5 border-bottom">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Encode</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/decode">Decode</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/statistics">Stats</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <div className={"row align-items-start"}>
                        <h1>Statistic</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={"mb-3"}>
                                <input {...register("code")} placeholder="Paste code here"
                                       className={"form-control"}/>
                            </div>
                            <div className={"mb-3"}>
                                <input className={"btn btn-primary mb-3"} type="submit"/>
                            </div>
                            <div className=''>
                                {
                                    !isEmpty(data.message) ? (
                                        <>
                                            <div className={"alert alert-danger"} role={"alert"}>
                                                {data?.message}
                                            </div>
                                        </>
                                    ) : null
                                }
                                {
                                    !isEmpty(data) && !data.message ? (
                                        <>
                                            <ul className="list-group">
                                                {
                                                    !isEmpty(data) && data.map((item, index) => {
                                                        return (
                                                            <li key={index} className="list-group-item">
                                                                <div><b>Country</b> : <b>{item.country}</b></div>
                                                                <div><b>Total</b> : <b>{item.total}</b></div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                            <div className="container m-5">
                                                <div className="row">
                                                    <div className="col-md-6 offset-md-3">
                                                        <Pie data={pieData}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : null
                                }
                            </div>
                        </form>
                    </div>
                </main>
                <footer className="pt-5 my-5 text-muted border-top">
                    Created by the @@@.
                </footer>
            </div>
        </>
    )
}
