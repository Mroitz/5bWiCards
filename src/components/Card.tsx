type Props = {
    imgurl: string;
    title: string;
    description: string;
}

export default function Card({ imgurl, title, description }: Props) {

    return (
        <div className="p-10">
            <div className="h-80">
                <img src={imgurl} alt="name" className="w-full h-full" />
                {title};
                {description};
            </div>
        </div>
    )
}