import { NextPage } from "next"
import { name, image } from "faker"
const Side: NextPage = () => {
    return <section className="fixed left-5 w-[200px]">
        <div className="w-full h-[180px]">
            <ul className="flex flex-col space-y-5">
                <li className="cursor-pointer"><i className="far fa-home-lg-alt mr-1"></i>Home</li>
                <li className="cursor-pointer"><i className="far fa-fire mr-1"></i>Trending</li>
                <li className="cursor-pointer"><i className="fad fa-horse-head mr-1"></i>Subscription</li>
            </ul>
        </div>
        <div className="p-[12px] h-fit">
            <header className="font-bold text-[18px] mb-[20px]">
                Popular Pornstar
            </header>
            <ul className="h-[584px] overflow-y-auto w-fit">
                {[{ name: name.firstName(), image: image.imageUrl(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) }, { name: name.firstName(), image: image.people(40, 40) },].map((v, i) => (
                    <li key={i} className="flex cursor-pointer w-fit h-10 my-4 items-center">
                        <i className="mr-5 w-[40px] h-[40px]">
                            <img src={v.image} className="rounded-full" />
                        </i>
                        <p className=" text-[#808080]" >{v.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
}
export default Side