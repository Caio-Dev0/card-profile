

function Card(props) {
    console.log(props)
    const {nome, profissao, cidade, skills, disponivel} = props
  return(
    <article>
        <h2>{nome}</h2>
        <h3>{profissao}</h3>
        <p>{cidade}</p>
        {skills.map(skill =>{
            return (
                <p>{skill}</p>
            )
        })}
        {disponivel ? <p>Profissional disponivel</p> : <p>Profissional indisponivel</p>}
    </article>
  )
}

export default Card
