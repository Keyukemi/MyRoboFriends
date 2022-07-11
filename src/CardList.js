import Card from './Card';
import {robots} from './robots';

const CardList = () =>{
    const CardsArray = robots.map((user, i) =>{
        return  <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return (
        <div>
           {CardsArray}
        </div>
    );
}

export default CardList;