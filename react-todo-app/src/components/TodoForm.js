import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    // variáveis para controle do estado
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    // configuração para setar o focus do input para adicionar ou alterar um ToDo
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });

    // comportamento do formulário ao alterar
    const handleChange = e => {
        setInput(e.target.value); // altera o valor do campo que chama a função para o valor que foi inserido
    }

    // comportamento de formulário ao submeter
    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( 
            <>
            <input 
                type="text"
                placeholder="Atualize seu item"
                value={input} 
                name="text" 
                className="todo-input edit"
                onChange={handleChange}
                ref={inputRef}
            />

            <button className="todo-button edit">Atualizar</button>
            </>) : 
            ( 
            <>
            <input 
                type="text"
                placeholder="Adicionar ToDo"
                value={input} 
                name="text" 
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
            />

            <button className="todo-button">Adicionar ToDo</button>
            </>
            )}



        </form>
    )
}

export default TodoForm
