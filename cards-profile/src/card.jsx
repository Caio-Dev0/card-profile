import SkillTag from "./skillTag"


function Card(props) {
    console.log(props)
    const {nome, profissao, cidade, skills, disponivel} = props
  return(
    <article>
        <h2>{nome}</h2>
        <h3>{profissao}</h3>
        <p>{cidade}</p>
        <SkillTag skills={skills}/>
        {/* Adiciona classe dinamicamente baseado no estado 'disponivel' */}
        <p className={disponivel ? "disponivel" : "indisponivel"}>
            {disponivel ? "✓ Profissional disponível" : "✗ Profissional indisponível"}
        </p>
    </article>
  )
}

export default Card
