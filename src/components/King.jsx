import currentKing from "../assets/gold_roger.png"

const King = () => {
  return (
    <div className="grid justify-items-center mb-20">
        <h1 className="text-white">KING</h1>
        <img className="grid justify-items-center h-[300px] hover:scale-110" src={currentKing} alt="Gold Roger" />
    </div>
  )
}

export default King