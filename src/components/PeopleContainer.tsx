import Card from "./Card"

type Props = {}

export default function PeopleContainer({ }: Props) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-green-400">
            <Card title={"Dr."} description={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} imgurl={"https://picsum.photos/200/300"} />
            <Card title={"Dr."} description={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} imgurl={"https://picsum.photos/200/300"} />
            <Card title={"Dr."} description={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} imgurl={"https://picsum.photos/200/300"} />
            <Card title={"Dr."} description={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} imgurl={"https://picsum.photos/200/300"} />
            <Card title={"Dr."} description={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} imgurl={"https://picsum.photos/200/300"} />
            <Card title={"Dr."} description={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} imgurl={"https://picsum.photos/200/300"} />
            <Card title={"Dr."} description={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} imgurl={"https://picsum.photos/200/300"} />
            <Card title={"Dr."} description={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"} imgurl={"https://picsum.photos/200/300"} />
        </div>
    )
}