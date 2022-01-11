import { image, name, random } from 'faker'
import { datatype } from 'faker/locale/zh_TW'
import type { NextPage } from 'next'
import Side from '../components/side'


const Home: NextPage = () => {
  return (
    <main className='mt-20 w-full h-full'>
      <Side />
      <main className='ml-[220px] w-[90%]'>
        <section className='px-[55px]  h-[60%] w-full'>
          <header className='my-[20px] w-full flex items-center justify-between'>
            <div className='flex items-center'>
              <img src={image.image()} className='img w-20 h-20 rounded-full mr-5' />
              <h1 className='font-bold'>{name.firstName()}</h1>
            </div>
            <div className="flex justify-end">
              <button className='w-[30px] h-[30px] mr-[10px] bg-black/30 rounded-full flex items-center justify-center'>
                <i className="fas fa-chevron-left text-white"></i>
              </button>
              <button className='w-[30px] h-[30px] mr-[10px] bg-black/30 rounded-full flex items-center justify-center'>
                <i className="fas fa-chevron-right text-white"></i>
              </button>
            </div>
          </header>
          <div className="relative flex flex-row overflow-y-auto  w-full h-full py-5">
            {[1, 2, 2, 2, 2, 2, 5, 2, 5, , 5, , 5, 1].map(() => (
              <div className="flex flex-col mx-5">
                <div className="rounded-[9px] overflow-hidden w-[250px] h-[150px]">
                  <img className="w-full h-auto " src="https://picsum.photos/250/150?random=2" />
                </div>
                <div className="flex flex-col w-full h-fit ">
                  <h1 className="text-black font-bold">{name.title()}</h1>
                  <div className="flex justify-between">
                    <p className="text-[#C2C2C2] font-[13px] mr-1">{datatype.number(10)}k view . {datatype.number(31)}days ago</p>
                    <p className="name text-[#C2C2C2] font-[13px]">{random.word()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='px-[40px] w-full my-5 '>
          <header className='flex items-center justify-between  mb-5'>
            <h1 className="text-[#FFA31A] font-bold font-[26px]">Recommended</h1>
            <div className="flex justify-end">
              <button className='w-[30px] h-[30px] mr-[10px] bg-black/30 rounded-full flex items-center justify-center'>
                <i className="fas fa-chevron-left text-white"></i>
              </button>
              <button className='w-[30px] h-[30px] mr-[10px] bg-black/30 rounded-full flex items-center justify-center'>
                <i className="fas fa-chevron-right text-white"></i>
              </button>
            </div>
          </header>
          <main className='w-full overflow-y-auto flex'>
            {[11, 2, 3, , 2, 5, 1, 4, , 4, 1, 4, 1, 4, 1, 4, 1, , 4, 12, 5, 2].map(() => (
              <div className="flex flex-col mx-5">
                <div className="rounded-[14px] overflow-hidden w-[540px] h-[250px]">

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
          </main>
        </section>
        <section className='px-[40px] w-full '>
          <header className="flex items-center justify-between  mb-5">
            <h1 className="text-[#FFA31A] font-bold font-[26px]">All</h1>

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
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((v, i) => (
                <div key={i} className="flex flex-col mx-5 w-full mb-5">
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
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((v, i) => (
                <div key={i} className="flex flex-col mx-5 w-full mb-5">
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
  )
}

export default Home
