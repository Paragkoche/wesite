import { NextPage } from "next"
// agr mujhe mera page dekhna h tho kese dekhu, link???
const view: NextPage = () => {
    return (
        <main className="flex w-full h-full mt-20">
            <section className="mr-[200px] w-[75%]">
                <div className="flex flex-col mx-10 w-full mb-5">
                    <div className="rounded-[14px] w-[113%] h-[560px] overflow-hidden">
                        <img className="w-full h-full" src="https://picsum.photos/540/250?random=2" />
                    </div>
                    <div className="flex flex-col w-full h-full">
                        <h1 className="text-[#FFA31A] font-xl">Dude You Re Getting A Telescope</h1>
                        <div className="flex">
                            <p>850k views</p>
                            <div className="flex">
                                <button>435k</button>
                                <button>123k</button>
                                <button>Share</button>
                                <button>...</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="flex">
                        <img />
                        <div>
                            <h1>Food & Drink</h1>
                            <p>Published on 14 Jun 2019</p>
                            <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.</p>
                            <button>Show more</button>
                        </div>
                        <button>Subscribe 2.3m</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="mr-10">
                    <header className="flex">
                        <p className="text-[#FFA31A]">Next</p>
                        <p className="text-[#FFA31A]">AUTOPLAY</p>
                    </header>
                    <ul>
                        <li className="mt-5">
                            <div className="rounded-[9px] overflow-hidden w-[300px] h-[170px] ">
                                <img className="w-full h-full" src="https://picsum.photos/540/250?random=2" />
                            </div>
                            <div className="flex flex-col w-full h-full">
                                <h1>Baby Monitor Technology</h1>
                                <div className="flex">
                                    <p>123k views</p>
                                    <p>Dollie Blair</p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-5">
                            <div className="rounded-[9px] overflow-hidden w-[300px] h-[170px] ">
                                <img className="w-full h-full" src="https://picsum.photos/540/250?random=2" />
                            </div>
                            <div className="flex flex-col w-full h-full">
                                <h1>Baby Monitor Technology</h1>
                                <div className="flex">
                                    <p>123k views</p>
                                    <p>Dollie Blair</p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-5">
                            <div className="rounded-[9px] overflow-hidden w-[300px] h-[170px] ">
                                <img className="w-full h-full" src="https://picsum.photos/540/250?random=2" />
                            </div>
                            <div className="flex flex-col w-full h-full">
                                <h1>Baby Monitor Technology</h1>
                                <div className="flex">
                                    <p>123k views</p>
                                    <p>Dollie Blair</p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-5">
                            <div className="rounded-[9px] overflow-hidden w-[300px] h-[170px] ">
                                <img className="w-full h-full" src="https://picsum.photos/540/250?random=2" />
                            </div>
                            <div className="flex flex-col w-full h-full">
                                <h1>Baby Monitor Technology</h1>
                                <div className="flex">
                                    <p>123k views</p>
                                    <p>Dollie Blair</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main >
    )
}
export default view