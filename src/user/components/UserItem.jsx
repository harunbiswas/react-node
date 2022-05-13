import { Link } from "react-router-dom";

export default function UserItem({data}) {
    return (
        <li className="user-item">
            <div className="user-item__content">
                <Link to={`${data.id}/places`}>
                    <div className="user-item__image">
                        <img src={data.image} alt={data.name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{data.name}</h2>
                        <h3>{data.places} {data.places === 1? "place" : "Plases"}</h3>
                    </div>
                </Link>
            </div>
        </li>
    )
}