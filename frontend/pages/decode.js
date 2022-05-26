import {useState, useEffect, useMemo} from "react";
import {useRouter} from 'next/router';
import {isEmpty} from "lodash";
import {useForm} from "react-hook-form";

import {decodePostData} from "../utils/middleware";

export default function Decode() {
    const {register, handleSubmit} = useForm();
    const [data, setData] = useState("");
    const onSubmit = data => {
        decodePostData(data).then(data => {
            setData(data.data)

        });
    }
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
                                        <a className="nav-link active" href="/decode">Decode</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/statistics">Stats</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <div className={"row align-items-start"}>
                        <h1>Decode</h1>
                        <form className={""} onSubmit={handleSubmit(onSubmit)}>
                            <div className={"mb-3"}>
                                <input {...register("code")} placeholder="Paste code here"
                                       className={"form-control"}/>
                            </div>
                            <div className={"mb-3"}>
                                <input className={"btn btn-primary mb-3"} type="submit"/>
                            </div>
                            <div className=''>
                                {!isEmpty(data) && data?.status ? (
                                    <>
                                        <div className={"alert alert-danger"} role={"alert"}>
                                            {data.message}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <ul className="list-group">
                                            {
                                                Object.keys(data).map(function (key, index) {
                                                    return (
                                                        <li className={"list-group-item"}>
                                                            <div key={index}>
                                                                <div><b>{key}</b> : <b>{data[key]}</b></div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </>
                                )
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
