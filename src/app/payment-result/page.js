// import required modules
import Image from "next/image";
import Check from "../../../public/assets/images/check.svg";
import Uncheck from "../../../public/assets/images/uncheck.svg";
import moment from "jalali-moment";

import { categoryToPaymentDescription, returnToToButtonText } from "../../utils/paymentHelper";
import Link from "next/link";

const PaymentResult = ({ searchParams }) => {
    const { status, category, amount, referenceBankId, verifiedAt, trackingId, returnTo } = searchParams

    const doReturn = () => {
        window.open(returnToToButtonText(category, returnTo)[1], '_self')
    }

    return (
        <>
            {status && (
                <>
                    {status === "OK" ? (
                        <div className="Paymentsection flex flex-col justify-center items-center pt-[9rem] w-full h-full">
                            <div className="Borderout flex flex-col justify-center items-center rounded-[40px] neo overflow-hidden bg-[#E9F0F7] p-1">
                                <div className="Borderin flex flex-col justify-center items-center rounded-[40px] shadow-inner overflow-hidden bg-[#E9F0F7] p-1">
                                    <div className="Backgreen flex flex-col justify-center items-center rounded-[40px] w-[70vw] max-lg:w-[92vw] h-[75vh] bg-[#008b4560] p-4 ">
                                        <div className="Borderdashded flex flex-col justify-center items-center py-8 rounded-3xl border-[4px] border-dashed border-white w-full h-full gap-4 max-lg:border-none">
                                            <p className=" text-center text-white text-[44px] max-lg:text-[1.5rem] font-bold">
                                                پرداخت با موفقیت انجام شد
                                            </p>

                                            <div className="Borderdashded flex flex-col justify-center items-center gap-1">
                                                <p className=" text-center text-white text-[32px] py-2 font-semibold">
                                                    جزئیات پرداخت
                                                </p>

                                                <div className="Text flex gap-[12rem] max-lg:gap-[1rem] justify-start items-center rounded-[10px] w-full h-[40px] bg-[#ffffff60] p-4">
                                                    <p className=" text-right text-[#333] w-[160px] max-lg:w-[90px] text-[20px] max-lg:text-sm font-semibold">
                                                        مبلغ:
                                                    </p>

                                                    <p className=" text-center text-[#000] text-[18x] max-lg:text-xs whitespace-nowrap font-medium">
                                                        {`${Math.floor(amount / 10)} تومان`}
                                                    </p>
                                                </div>

                                                <div className="Text flex gap-[12rem] max-lg:gap-[1rem] justify-start items-center rounded-[10px] w-full h-[40px] bg-[#ffffff60] p-4">
                                                    <p className=" text-right text-[#333] w-[160px] max-lg:w-[90px] text-[20px] max-lg:text-sm font-semibold">
                                                        شرح پرداخت:
                                                    </p>

                                                    <p className=" text-center text-[#000] text-[18x] max-lg:text-xs whitespace-nowrap font-medium">
                                                        {categoryToPaymentDescription(category)}
                                                    </p>
                                                </div>

                                                <div className="Text flex gap-[12rem] max-lg:gap-[1rem] justify-start items-center rounded-[10px] w-full h-[40px] bg-[#ffffff60] p-4">
                                                    <p className=" text-right text-[#333] w-[160px] max-lg:w-[90px] text-[20px] max-lg:text-sm font-semibold">
                                                        شناسه پیگیری:
                                                    </p>

                                                    <p className=" text-center text-[#000] text-[18x] max-lg:text-xs whitespace-nowrap font-medium">
                                                        {trackingId}
                                                    </p>
                                                </div>

                                                <div className="Text flex gap-[12rem] max-lg:gap-[1rem] justify-start items-center rounded-[10px] w-full h-[40px] bg-[#ffffff60] p-4">
                                                    <p className=" text-right text-[#333] w-[160px] max-lg:w-[90px] text-[20px] max-lg:text-sm font-semibold">
                                                        شناسه مرجع بانک:
                                                    </p>

                                                    <p className=" text-center text-[#000] text-[18x] max-lg:text-xs whitespace-nowrap font-medium">
                                                        {referenceBankId}
                                                    </p>
                                                </div>

                                                <div className="Text flex gap-[12rem] max-lg:gap-[1rem] justify-start items-center rounded-[10px] w-full h-[40px] bg-[#ffffff60] p-4">
                                                    <p className=" text-right text-[#333] w-[160px] max-lg:w-[90px] text-[20px] max-lg:text-sm font-semibold">
                                                        تاریخ درخواست:
                                                    </p>

                                                    <p className=" text-center text-[#000] text-[18x] max-lg:text-xs whitespace-nowrap font-medium">
                                                        {verifiedAt &&
                                                            moment(verifiedAt, "YYYY/MM/DD")
                                                                .locale("fa")
                                                                .format("YYYY/MM/DD")}
                                                    </p>
                                                </div>
                                            </div>

                                            <Image className="absolute opacity-60" src={Check} alt="payment-image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href={returnTo}>
                                <div className="button-neo w-[200px] h-10 flex items-center justify-center font-medium -translate-y-20 text-[#008F47]">
                                    {returnToToButtonText(category, returnTo)[0]}
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <div className="Paymentsection flex flex-col justify-center items-center pt-[9rem] w-full h-full">
                            <div className="Borderout flex flex-col justify-center items-center rounded-[40px] neo overflow-hidden bg-[#E9F0F7] p-1">
                                <div className="Borderin flex flex-col justify-center items-center rounded-[40px] shadow-inner overflow-hidden bg-[#E9F0F7] p-1">
                                    <div className="Backgreen flex flex-col justify-center items-center rounded-[40px] w-[70vw] max-lg:w-[92vw] h-[75vh] bg-[#CF000060] p-4">
                                        <div className="Borderdashded flex flex-col justify-center items-center py-8 rounded-3xl border-[4px] border-dashed border-white w-full h-full gap-4 max-lg:border-none">
                                            <p className=" text-center text-white text-[44px] max-lg:text-[1.8rem] font-bold">
                                                پرداخت ناموفق بود
                                            </p>

                                            <div className="Borderdashded flex flex-col justify-center items-center gap-1">
                                                <p className=" text-center text-white text-[32px] max-lg:text-[1.5rem] py-2 font-semibold">
                                                    جزئیات پرداخت
                                                </p>

                                                <div className="Text flex gap-[12rem] max-lg:gap-[1rem] justify-start items-center rounded-[10px] w-full h-[40px] bg-[#ffffff60] p-4">
                                                    <p className=" text-right text-[#333] w-[160px] max-lg:w-[90px] text-[20px] max-lg:text-sm font-semibold">
                                                        مبلغ:
                                                    </p>

                                                    <p className=" text-center text-[#000] text-[18x] max-lg:text-xs whitespace-nowrap font-medium">
                                                        {`${Math.floor(amount / 10)} تومان`}
                                                    </p>
                                                </div>

                                                <div className="Text flex gap-[12rem] max-lg:gap-[1rem] justify-start items-center rounded-[10px] w-full h-[40px] bg-[#ffffff60] p-4">
                                                    <p className=" text-right text-[#333] w-[160px] max-lg:w-[90px] text-[20px] max-lg:text-sm font-semibold">
                                                        شرح پرداخت:
                                                    </p>

                                                    <p className=" text-center text-[#000] text-[18x] max-lg:text-xs whitespace-nowrap font-medium">
                                                        {categoryToPaymentDescription(category)}
                                                    </p>
                                                </div>

                                                <div className="Text flex gap-[12rem] max-lg:gap-[1rem] justify-start items-center rounded-[10px] w-full h-[40px] bg-[#ffffff60] p-4">
                                                    <p className=" text-right text-[#333] w-[160px] max-lg:w-[90px] text-[20px] max-lg:text-sm font-semibold">
                                                        شناسه پیگیری:
                                                    </p>

                                                    <p className=" text-center text-[#000] text-[18x] max-lg:text-xs whitespace-nowrap font-medium">
                                                        {trackingId}
                                                    </p>
                                                </div>

                                                <div className="Text flex gap-[12rem] max-lg:gap-[1rem] justify-start items-center rounded-[10px] w-full h-[40px] bg-[#ffffff60] p-4">
                                                    <p className=" text-right text-[#333] w-[160px] max-lg:w-[90px] text-[20px] max-lg:text-sm font-semibold">
                                                        تاریخ درخواست:
                                                    </p>

                                                    <p className=" text-center text-[#000] text-[18x] max-lg:text-xs whitespace-nowrap font-medium">
                                                        {verifiedAt &&
                                                            moment(verifiedAt, "YYYY/MM/DD")
                                                                .locale("fa")
                                                                .format("YYYY/MM/DD")}
                                                    </p>
                                                </div>
                                            </div>

                                            <Image className="absolute opacity-60" src={Uncheck} alt="uncheck" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href={returnTo}>
                                <div className="button-neo w-[200px] h-10 flex items-center justify-center font-medium -translate-y-20 text-[#008F47]">

                                    {returnToToButtonText(category, returnTo)[0]}

                                </div>
                            </Link>
                        </div>
                    )}
                </>
            )}
        </>
    );
};


export default PaymentResult;
