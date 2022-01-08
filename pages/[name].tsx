import { image, lorem, random } from "faker"
import { name } from "faker/locale/az"
import { NextPage } from "next"
import React from "react"
import Home from "../components/channel/home"
import Side from "../components/side"
const Channel: NextPage = () => {
    const [urls, setUrls] = React.useState({ home: true, Video: false, Photos: false, About: false })


    return <main className='mt-20 w-full h-full'>
        <Side />
        <main className="ml-[220px] w-[90%] px-[60px]">
            <div className="w-full h-[280px] rounded-2xl bg-gray-500 overflow-hidden ">
                {/* <!-- <img src="https://picsum.photos/1540/280?random=2" /> --> */}
            </div>
            <div className="flex justify-between items-center my-5">
                <div className="flex justify-start">
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden  mr-3">
                        <img src="https://randomuser.me/api/portraits/women/50.jpg" className="mr-[10px]" />
                    </div>
                    <div className="flex  justify-center flex-col">
                        <p className="font-bold">Name</p>
                        <p className="text-[#C2C2C2]">245K subscribed</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-[#FFA31A] h-[40px] flex justify-center items-center text-white rounded-3xl px-5 font-[16px]">Subscribe
                        2.3m</button>
                </div>
            </div>
            <main className="flex">
                <section>
                    <header>
                        <ul className="flex space-x-[75px]">
                            <li className={`cursor-pointer ${urls.home ? 'text-[#FFA31A]' : null}`} onClick={() => setUrls({ home: true, Video: false, Photos: false, About: false })}>Home</li>
                            <li className={`cursor-pointer ${urls.Video ? 'text-[#FFA31A]' : null} `} onClick={() => setUrls({ home: false, Video: true, Photos: false, About: false })}>Video</li>
                            <li className={`cursor-pointer ${urls.Photos ? 'text-[#FFA31A]' : null} `} onClick={() => setUrls({ home: false, Video: false, Photos: true, About: false })}>Photos</li>
                            <li className={`cursor-pointer ${urls.About ? 'text-[#FFA31A]' : null} `} onClick={() => setUrls({ home: false, Video: false, Photos: false, About: true })}>About</li>
                        </ul>
                    </header>
                    {urls.home ? <Home /> : null}
                    {urls.Video ? <Home /> : null}
                    {urls.Photos ? <Home /> : null}
                    {urls.About ? <Home /> : null}

                </section>
            </main>
            <section className="w-full">
                <header className="flex items-center justify-between  mb-5">
                    <h1 className="text-[#FFA31A] font-bold font-[26px]">Margaret Phelps videos</h1>

                </header>
                <main className="w-full overflow-y-auto flex">
                    <div className="w-1/3 mx-5">
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                            <div className="flex flex-col mx-5 w-full mb-5">
                                <div className="rounded-[14px] overflow-hidden w-full h-[250px]">

                                    <img className="w-full h-full " src="https://picsum.photos/540/250?random=2" />
                                </div>
                                <div className="flex flex-col w-full h-fit">
                                    <h1 className="text-black font-bold">A Brief History Of Creation</h1>
                                    <div className="flex justify-between">
                                        <p className="text-[#C2C2C2] font-[13px] mr-1">80k view . 3days ago</p>
                                        <p className="name text-[#C2C2C2] font-[13px]">{name.firstName()}</p>
                                    </div>
                                </div>
                            </div>


                        ))}
                    </div>
                    <div className="w-1/3 mx-5">
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                            <div className="flex flex-col mx-5 w-full mb-5">
                                <div className="rounded-[14px] overflow-hidden w-full h-[250px]">

                                    <img className="w-full h-full " src="https://picsum.photos/540/250?random=2" />
                                </div>
                                <div className="flex flex-col w-full h-fit">
                                    <h1 className="text-black font-bold">A Brief History Of Creation</h1>
                                    <div className="flex justify-between">
                                        <p className="text-[#C2C2C2] font-[13px] mr-1">80k view . 3days ago</p>
                                        <p className="name text-[#C2C2C2] font-[13px]">{name.firstName()}</p>
                                    </div>
                                </div>
                            </div>


                        ))}
                    </div>
                    <div className="w-1/3 mx-5">
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                            <div className="flex flex-col mx-5 w-full mb-5">
                                <div className="rounded-[14px] overflow-hidden w-full h-[250px]">

                                    <img className="w-full h-full " src="https://picsum.photos/540/250?random=2" />
                                </div>
                                <div className="flex flex-col w-full h-fit">
                                    <h1 className="text-black font-bold">A Brief History Of Creation</h1>
                                    <div className="flex justify-between">
                                        <p className="text-[#C2C2C2] font-[13px] mr-1">80k view . 3days ago</p>
                                        <p className="name text-[#C2C2C2] font-[13px]">{name.firstName()}</p>
                                    </div>
                                </div>
                            </div>


                        ))}
                    </div>
                </main>
            </section>
        </main>
    </main>
}
export default Channel