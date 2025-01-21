import { useEffect, useState } from "react"
import Card from "./Card"

type Props = {}
type Person = {
    firstname: string;
    lastname: string;
    image: string;

}

export default function PeopleContainer({ }: Props) {
    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        fetch("http://10.115.1.32:8055/items/people")
            .then((response) =>
                response.json().then((data: any) => {
                    setPeople(data.data);
                    console.log(data.data);
                })
            );
    }, []);



    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {people.map((person: Person) => {
                return (
                    <Card
                        name={person.firstname + " " + person.lastname}
                        imgurl={"http://10.115.1.32:8055/assets/" + person.image} description={""} />)
            })}

        </div>


    )
}
