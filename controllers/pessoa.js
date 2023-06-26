import {db} from "../data/db.js"

export const addPessoa = (req, res)=>{

    // Não consta se 1 pessoa pode ter mais de 1 endereço na descrição, tive problemas com docker e sem acesso as tabelas, adicionei na tabela de pessoas por não saber o identificador da pessoa na tabela de endereços.

    const q = "INSERT INTO PESSOA (`nome`, `tipo`, `cpf`, `cnpj`, `celular`, `telefone`, `email`, `cep`, `logradouro`, `numero`, `complemento`, `cidade`, `bairro`, `estado`) VALUES(?)";

    const values =[
        req.body.nome,
        req.body.tipo,
        req.body.cpf,
        req.body.cnpj,
        req.body.celular,
        req.body.telefone,
        req.body.email,
        
        req.body.cep,
        req.body.logradouro,
        req.body.numero,
        req.body.complemento,
        req.body.cidade,
        req.body.bairro,
        req.body.estado

    ];

    db.query(q, [values], (err)=>{
        if (err) return res.json(err);

        return res.status(200).json("Pessoa cadastrada com sucesso");
    })

}
