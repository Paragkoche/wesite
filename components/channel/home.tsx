import { NextPage } from "next";
import { image, lorem, name } from "faker";
const Home: NextPage = () => {
    return <div className="w-[1120px] h-[250px] flex my-10 overflow-y-auto">
        <div className="w-1/2" >
            <img src={image.imageUrl(560, 250)} className="rounded-2xl" />
        </div>
        <div className="w-1/2 ml-5 flex flex-col justify-between"  >
            <h1 className="font-bold text-[26px]">{name.title()}</h1>
            <p className="text-[16px]">{lorem.paragraph()}</p>
            <span className="text-[16px] text-[#C2C2C2]">11k views  ·  6 months ago</span>
        </div>
    </div>
}
export default Home