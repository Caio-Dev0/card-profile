import Card from "./card"


function ContainerCard(){
    return(
        <div className="containerCard">
            <Card nome="carlos" profissao="programador" cidade="Porto Rico" skills={["php", ".net", "angular"]} disponivel={true} />
            <Card nome="carlos" profissao="programador" cidade="Porto Rico" skills={["php", ".net", "angular"]} disponivel={true} />
            <Card nome="carlos" profissao="programador" cidade="Porto Rico" skills={["php", ".net", "angular"]} disponivel={true} />
        </div>
    )
}


export default ContainerCard