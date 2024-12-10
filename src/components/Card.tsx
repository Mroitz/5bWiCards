type Props = {
    imgurl: string;
    title: string;
    description: string;
}

export default function Card({ imgurl, title, description }: Props) {

    return (
        <div className="p-10">
            <div className="h-100%" >
                <img src={imgurl} alt="name" className="w-full h-full" />
                <p>{title}</p>
                <p>{description}</p>

            </div>
        </div >
    )
}