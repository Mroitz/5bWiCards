type Props = {
    imgurl: string;
    name
    : string;
    description: string;
}

export default function Card({ imgurl, name, description }: Props) {

    return (
        <div className="m-24 w-">
            <img src={imgurl} alt="name" className="h-96 w-96" />
            <p className="font-bold text-3xl">{name}</p>
            <p>{description}</p>

        </div>
    )
}