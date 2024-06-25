import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [number, setNumber] = useState('');
    const [paras, setParas] = useState({});
    const [btn, setBtn] = useState("Genarete Data")
    const [resetBtn, setResetBtn] = useState("Reset")

    async function resetData(){
        setResetBtn("Resetting.....")
        setNumber('');
        setParas('');
        setResetBtn("Reset")
    }

    async function getData() {
        setBtn("Generating......")
        const url = `https://hipsum.co/api/?type=hipster-centric&paras=${number}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setParas((response))
                setBtn("Genarete Data")
            })
    }
    return (
        <div className="">
            <div className='container'>
                <div className="mt-4 p-5 bg-primary text-white rounded text-center">
                    <h1>Random Text Generator</h1>
                </div>
                <div className='row'>
                    <div className='col-lg-12 mt-3'>
                        <div>
                            <label><b>Enter Number of Paras</b></label>
                            <div className="input-group mt-2">
                                <input type="text" onChange={(e) => { setNumber(e.target.value) }} value={number} className="form-control" placeholder="Enter Number of Paras" />
                                <span onClick={() => { getData() }} className="input-group-text bg-success text-white" style={{ cursor: 'pointer' }}><b>{btn}</b></span>
                                <span onClick={() => { resetData() }} className="input-group-text bg-danger text-white" style={{ cursor: 'pointer' }}><b>{resetBtn}</b></span>
                            </div>
                        </div>
                        <div className='py-4'>
                            <label><b>Result</b></label>
                            <div style={{ textAlign: "justify", lineHeight: 2 }}>
                                <textarea className='form-control' rows="10" defaultValue={paras != '' && paras.length > 0 ? paras : ''}>
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
