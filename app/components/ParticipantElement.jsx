import Image from "next/image";

export default function ParticipantElement(props) {
    const { name, url, image, votes, totalVotes, isWinning } = props;

    return (
        <div className="flex flex-col items-center">
            { isWinning && <span className="font-bold text-yellow-500">Ganando</span>}
            <a href={url} 
            className={
            `hover:scale-105 transition-transform duration-200 shadow ${isWinning && "border-yellow-500 border-4 shadow-xl shadow-yellow-500"} rounded-full`}>
                <Image className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover" src={image} alt={name + " Logo"} width={100} height={100} />
            </a>
            <span className="text-xl font-semibold">{votes}%</span>
            <span className="opacity-75 font-semibold">{(votes / 100 * totalVotes).toFixed(0)} votos</span>
        </div>
    )
}