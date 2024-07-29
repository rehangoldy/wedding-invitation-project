import React, { useState } from 'react'
import './GiveComponent.scss'
import BcaLogo from '../../assets/Images/bca.png'
import { FaGift } from 'react-icons/fa';
import FrameFlowerBot from '../../assets/Images/frame-flower-bot.png'



const GiveComponent = () => {

    const [visibleBank, setVisibleBank] = useState(false);
    const [visibleGive, setVisibleGive] = useState(false);
    const [alertNumber, setAlertNumber] = useState(false);

    const ButtonUnvisibleBank = () => {
        setVisibleBank(true);
        setVisibleGive(false);
    };

    const ButtonUnvisibleGive = () => {
        setVisibleBank(false);
        setVisibleGive(true);
    };

    const copyToClipboard = (text) => {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        setAlertNumber(true);

        setTimeout(() => {
            setAlertNumber(false);
        }, 2000);
    };

    const CopyNumber = () => {
        const numberBank = document.getElementById('number-bank').innerText;
        copyToClipboard(numberBank);
    };

    const CopyAlamat = () => {
        const alamat = document.getElementById('alamat').innerText;
        copyToClipboard(alamat);
    };


    return (
        <div className='give-component mb-5'>

            <div className="m-auto text-center my-5">
                <h1 className='display-4'> <FaGift /></h1>
                <h1 className='display-1 my-2'>Tanda Kasih</h1>
                <p>Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti bagi kami. </p>
                <p> Dan jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu dapat memberi kado secara cashless. Terima kasih</p>
            </div>
            {alertNumber && (
                <div className='d-flex align-item-center justify-content-center' data-aos='fade-out'>
                    <div className="alert alert-success text-center alert-copy " role="alert" >
                        Berhasil di salin
                    </div>
                </div>
            )}

            <div className='d-flex align-item-center justify-content-center gap-4'>
                <button className='btn btn-dark' onClick={ButtonUnvisibleBank}>Cashless</button>
                <button className='btn btn-dark' onClick={ButtonUnvisibleGive}>Kirim Kado</button>
            </div>
            {visibleBank && (
                <div id='cashless-give' className='give-cashless mt-4' data-aos='fade-out' >
                    <div className="d-flex align-item-center justify-content-center gap-4">
                        <img src={BcaLogo} className='img-bank' alt="" />
                        <div className='flex-column'>
                            <p id='number-bank' className='fw-bold'>0982322345</p>
                            <p>Dicky Dermawan</p>
                        </div>
                        <div className='button-copy-wrapper mt-3'>
                            <button className='btn btn-dark' onClick={CopyNumber}>Copy</button>
                        </div>
                    </div>

                    <div className="d-flex align-item-center justify-content-center gap-4">
                        <img src={BcaLogo} className='img-bank' alt="" />
                        <div className='flex-column'>
                            <p id='number-bank' className='fw-bold'>0982322345</p>
                            <p>Dicky Dermawan</p>
                        </div>
                        <div className='button-copy-wrapper mt-3'>
                            <button className='btn btn-dark' onClick={CopyNumber}>Copy</button>
                        </div>
                    </div>
                </div>
            )}
            {visibleGive && (
                <div className='direct-gift' data-aos='fade-out'>
                    <div className='text-center'>
                        <h1 className='display-2'>Kirim Kado</h1>
                        <p>Anda dapat mengirim kado ke :</p>
                        <p id='alamat'>Rintis IX Balimbingan Tanah Jawa kab. Simalungun</p>
                        <button className='btn btn-dark' onClick={CopyAlamat}>Copy</button>
                    </div>
                </div>
            )}

            <div data-aos='zoom-out-up'>
                <img src={FrameFlowerBot} className='frame-flower' alt="" style={{ width: '100%', marginTop: 10 }} />
            </div>







            {/* <div className='d-flex align-item-center justify-content-center' data-aos='flip-left'>
                <div className="card ">
                    <div className="card-inner">
                        <div className="card-front">
                            <div className="card-bg"></div>
                            <img src={BcaLogo} className='logo' alt='' style={{ width: 100, height: 105, fill: 'Background', marginBottom: 400 }} />
                            <div className="card-glow"></div>
                            <div className="card-contactless">
                            </div>
                            <div className="card-chip"></div>
                            <div className="card-holder">John Doe</div>
                            <div className="card-number">1234 5678 9000 1234</div>
                            <div className="card-valid">12/24</div>
                        </div>
                        <div className="card-back">
                            <div className="card-signature">John Doe</div>
                            <div className="card-seccode">123</div>
                        </div>
                    </div>
                </div>
            </div> */}


        </div>
    )
}

export default GiveComponent
