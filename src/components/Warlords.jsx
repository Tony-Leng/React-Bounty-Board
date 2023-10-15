import Chopper from "../assets/chopper.png";
import Edward from "../assets/edward_newgate.png";
import Nami from "../assets/nami.png";
import Nico from "../assets/nico_robin.png";
import Zoro from "../assets/roronoa_zoro.png";
import Sanji from "../assets/sanji.png";
import Usopp from "../assets/usopp.png";

const Warlords = () => {
  const currentWarlords = [
    {
        id:1,
        image: Chopper
    },
    {
        id:2,
        image: Edward
    },
    {
        id:3,
        image: Nami
    },
    {
        id:4,
        image: Nico
    },
    {
        id:5,
        image: Zoro
    },
    {
        id:6,
        image: Sanji
    },
    {
        id:7,
        image: Usopp
    },
  ]
  
    return (
        <section className="grid justify-items-center mb-20">
            <h1 className="text-white">WARLORDS</h1>
            <div className="flex gap-x-4">
                {currentWarlords.map((warlord)=> {
                    return <img className="h-[200px]" key={warlord.id} src={warlord.image} alt="" />
                })}
            </div>
        </section>
  )
}

export default Warlords