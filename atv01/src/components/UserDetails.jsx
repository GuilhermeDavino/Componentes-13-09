

function UserDetails(props) {
    
    if(props.idade < 18) {
        return(
            <p>{props.nome} tem {props.idade} e trabalha como {props.profissao} não tem idade suficiente para tira habilitação</p>
        )
    }

    return(
        <p>{props.nome} tem {props.idade} e trabalha como {props.profissao} tem idade suficiente para tira habilitação</p>
    )
}

export default UserDetails;

