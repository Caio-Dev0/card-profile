function SkillTag(props){
    const {skills} = props
    console.log(props)
    return(
        <ul className="containerSkills">
            {skills ? skills.map(skill =>{
                return(
                    <li>{skill}</li>
                )
            }) : <p>Profissional sem skills</p>}
        </ul>
    )
}

export default SkillTag